import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

// Cloudflare R2 (S3 API) — off-chain supplement store. Holds the descriptive
// fields that don't belong on-chain (applicant text, agent reasons/scores),
// keyed by applicationId. On-chain DecisionRegistry remains the source of
// truth for verdict/hashes/amount; R2 never stores fabricated decisions.

const accountId = process.env.R2_ACCOUNT_ID ?? "";
const accessKeyId = process.env.R2_ACCESS_KEY_ID ?? "";
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY ?? "";
const bucket = process.env.AGRA_R2_BUCKET ?? "agra-grants";

export const r2Configured = Boolean(
  accountId && accessKeyId && secretAccessKey,
);

let client: S3Client | null = null;
function s3(): S3Client {
  if (!client) {
    client = new S3Client({
      region: "auto",
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: { accessKeyId, secretAccessKey },
    });
  }
  return client;
}

const KEY_PREFIX = "applications/";

export async function putRecord(id: string, value: unknown): Promise<void> {
  await s3().send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: `${KEY_PREFIX}${id}.json`,
      Body: JSON.stringify(value),
      ContentType: "application/json",
    }),
  );
}

export async function getRecord<T>(id: string): Promise<T | null> {
  try {
    const res = await s3().send(
      new GetObjectCommand({
        Bucket: bucket,
        Key: `${KEY_PREFIX}${id}.json`,
      }),
    );
    const body = await res.Body?.transformToString();
    return body ? (JSON.parse(body) as T) : null;
  } catch (error) {
    if ((error as { name?: string }).name === "NoSuchKey") return null;
    throw error;
  }
}
