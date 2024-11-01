"use client";

import { UilGithub } from "app/components/Icons/GitHub";
import { Card, Cards } from 'fumadocs-ui/components/card';

export function ToGitHub({ repo }: { repo: string }) {
  return (
    <Cards className="gap-6">
      <Card
        className="m-2"
        href={`https://github.com/${repo}`}
        title={`${repo} - GitHub`}
        icon={<UilGithub />}
        external
      />
    </Cards>
  );
}
