import { UilGithub } from "app/components/Icons/GitHub";
import { Card, Cards } from 'fumadocs-ui/components/card';

export function ToGitHub({ repo }: { repo: string }) {
  return (
    <Cards>
      <Card
        href={`https://github.com/${repo}`}
        title={`${repo} - GitHub`}
        icon={<UilGithub />}
        external
      />
    </Cards>
  );
}
