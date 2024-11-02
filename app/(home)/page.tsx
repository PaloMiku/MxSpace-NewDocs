import { cva } from 'class-variance-authority';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { buttonVariants } from '@/app/components/ui/button';
import { UwuHero } from '@/app/(home)/uwu';
import ContributorCounter from '@/app/components/contributor-count';
import Img from './img.png';

const badgeVariants = cva(
  'mb-2 inline-flex size-7 items-center justify-center rounded-full bg-fd-primary font-medium text-fd-primary-foreground',
);

const code = `const schema = frontmatterSchema.extend({
  preview: z.string().optional()
})`;

export default function Page(): React.ReactElement {
  return (
    <>
      <div
        className="absolute inset-x-0 top-[200px] h-[250px] max-md:hidden"
        style={{
          background:
            'repeating-linear-gradient(to right, hsl(var(--primary)/.1),hsl(var(--primary)/.1) 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, hsl(var(--primary)/.1),hsl(var(--primary)/.1) 1px,transparent 1px,transparent 50px)',
        }}
      />
      <main className="container relative max-w-[1100px] px-2 py-4 lg:py-16">
        <div
          style={{
            background:
              'repeating-linear-gradient(to bottom, transparent, hsl(var(--secondary)/.2) 500px, transparent 1000px)',
          }}
        >
          <div className="relative">
            <Hero />
            <UwuHero />
          </div>
          <Feedback />
          <div
            className="container relative overflow-hidden border-x border-t py-4 sm:py-8"
            style={{
              backgroundImage:
                'radial-gradient(circle at bottom center, hsl(var(--secondary)), hsl(var(--background)))',
            }}
          >
            <h2 className="bg-gradient-to-b from-fd-primary to-fd-foreground/40 bg-clip-text text-center text-2xl font-semibold text-transparent sm:text-3xl">
              Loved by users.
              <br />
              Built for developers.
            </h2>
          </div>
          <Contributing />
        </div>
      </main>
    </>
  );
}

function Hero(): React.ReactElement {
  return (
    <div className="container relative z-[2] flex flex-col overflow-hidden border-x border-t bg-fd-background px-6 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden">
      <h1 className="text-6xl font-medium max-md:hidden">
        Mix Space
        <br className="mt-2" />
        <span className="text-4xl">An Alternative Personal Space.</span>
      </h1>
      <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
        Mix Space 是一个替代<span className="text-fd-foreground">个人空间</span>
        的新方式。
      </p>
      <div className="inline-flex items-center gap-3 max-md:mx-auto">
        <Link
          href="/docs/core"
          className={cn(
            buttonVariants({ size: 'lg', className: 'rounded-full' }),
          )}
        >
          5 分钟拥有自己的 Mix Space
        </Link>
        <a
          href="https://github.com/mx-space/core"
          className={cn(
            buttonVariants({
              size: 'lg',
              variant: 'outline',
              className: 'rounded-full bg-fd-background',
            }),
          )}
        >
          Github
        </a>
      </div>
      <Image
        src={Img}
        alt="preview"
        className="mb-[-100px] mt-8 min-w-[800px] select-none duration-1000 animate-in fade-in slide-in-from-bottom-12 md:mb-[-170px] md:min-w-[1100px]"
        priority
      />
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse at top, transparent 60%, hsla(250,90%,90%,0.2))',
            'linear-gradient(to bottom, transparent 30%, hsl(var(--primary) / 0.2))',
            'linear-gradient(to bottom, hsl(var(--background)) 40%, transparent)',
            'repeating-linear-gradient(45deg, transparent,transparent 60px, hsl(var(--primary)) 61px, transparent 62px)',
          ].join(', '),
        }}
      />
    </div>
  );
}

function Feedback(): React.ReactElement {
  return (
    <div className="relative flex flex-col items-center overflow-hidden border-x border-t px-6 pb-8 pt-8 md:pb-8">
      <div
        className="absolute inset-x-0 bottom-0 z-[-1] h-24 opacity-30 duration-1000 animate-in fade-in"
        style={{
          maskImage: 'linear-gradient(to bottom,transparent,white)',
          backgroundImage:
            'linear-gradient(to right, #4ebfff, transparent, #e92a67)',
        }}
      />
      <div className="rounded-xl border bg-gradient-to-b from-secondary p-4 shadow-lg">
        <p className="text-sm font-medium">
          {`"Mix Space，是一个小型的个人空间站。继承了传统的博客，有着不同于博客的丰富的内容。适合那些喜欢写不同风格或类型的写作爱好者。"`}
        </p>
        <div className="mt-4 flex flex-row items-center gap-2">
          <Image
            src="https://avatars.githubusercontent.com/u/41265413"
            alt="avatar"
            width="32"
            height="32"
            className="size-8 rounded-full"
          />
          <div>
            <a
              href="https://github.com/Innei"
              rel="noreferrer noopener"
              className="text-sm font-medium"
            >
              Innei
            </a>
            <p className="text-xs text-fd-muted-foreground">
              Mix Space 的开发者
            </p>
          </div>
          <Link
            href="https://innei.in"
            className={cn(
              buttonVariants({ variant: 'outline', className: 'ml-auto' }),
            )}
          >
            他的个人空间
          </Link>
        </div>
      </div>
    </div>
  );
}

function Contributing(): React.ReactElement {
  return (
    <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
      <Heart className="mb-4" />
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
        MixSpace 由你创造
      </h2>
      <p className="mb-4 text-fd-muted-foreground">
       MixSpace 由 100% 的热情和开源社区提供动力
      </p>
      <div className="mb-8 flex flex-row items-center gap-2">
        <Link
          href="https://github.com/mx-space"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          前往 Github 开源社区
        </Link>
      </div>
      <ContributorCounter repoOwner="mx-space" repoName="docs" />
    </div>
  );
}