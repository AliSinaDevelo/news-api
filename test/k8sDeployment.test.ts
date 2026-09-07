import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parse } from "yaml";
import { describe, expect, it } from "vitest";

type Deployment = {
  spec?: {
    template?: {
      spec?: {
        containers?: Array<{
          env?: Array<{ name?: string; value?: string }>;
        }>;
      };
    };
  };
};

describe("Kubernetes deployment security defaults", () => {
  it("does not enable proxy trust in the base deployment", () => {
    const deployment = parse(
      readFileSync(resolve(process.cwd(), "deploy/k8s/deployment.yaml"), "utf8"),
    ) as Deployment;
    const env = deployment.spec?.template?.spec?.containers?.[0]?.env ?? [];

    expect(env.find((entry) => entry.name === "TRUST_PROXY")).toBeUndefined();
  });
});
