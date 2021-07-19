<template>
  <Layout >
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center text-ui-primary mb-32 mt-32">
          <Logo :width="600" :isDarkMode="this.$root.$options.store.isDarkMode" />
        </div>
        <h1 class="text-4xl text-center lg:text-5xl">
          Decentralized Scheduling for Blockchain Transactions 
        </h1>
        <p class="text-xl font-medium text-center">
          Schedule tasks for any contract. Automate anything your contract needs
        </p>

        <div class="py-4">
          <code class="block px-4 py-1 select-all bg-ui-border text-ui-typo"
            >npm i -g croncat && croncat tasks</code
          >
        </div>

        <div class="flex justify-center mt-8">
          <g-link
            to="/docs/"
            class="
              flex
              items-center
              px-6
              py-4
              ml-auto
              text-2xl
              font-bold
              leading-none
              text-white
              border
              rounded-lg
              shadow-lg
              bg-ui-primary
              border-ui-primary
              transition-all
              duration-200
              ease-out
              transform
              hover:shadow-xl
              hover:-translate-y-1
              mr-12
            "
          >
            Get started
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
          <g-link
            to="/docs/use-cases/"
            class="
              flex
              items-center
              px-6
              py-4
              ml-auto
              text-2xl
              font-bold
              leading-none
              text-white
              border
              rounded-lg
              shadow-lg
              bg-ui-secondary
              border-ui-secondary
              transition-all
              duration-200
              ease-out
              transform
              opacity-50
              hover:shadow-xl
              hover:opacity-100
            "
          >
            Use Cases
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>
      </div>

      <div
        class="
          pt-8
          mx-auto
          mt-8
          border-t
          md:mt-16
          md:pt-16
          border-top border-ui-border
          max-w-screen-sm
        "
      ></div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div
          class="
            flex flex-col
            items-center
            w-full
            px-4
            mb-8
            text-center
            md:w-1/4
          "
        >
          <ClockIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Standard Cron Expression
          </h3>
          <p class="text-lg text-left">
            Use the age old standard crontab spec to annotate time intervals. Extended to support blockchain consensus timing.
          </p>
          <!-- <g-link
            to="/docs/"
            class="
              flex
              items-center
              px-6
              py-4
              ml-auto
              text-md
              font-bold
              leading-none
              text-white
              border
              rounded-lg
              shadow-lg
              bg-ui-primary
              border-ui-primary
              transition-all
              duration-200
              ease-out
              transform
              hover:shadow-xl
              hover:-translate-y-1
            "
          >
            Start
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link> -->
        </div>

        <div
          class="
            flex flex-col
            items-center
            w-full
            px-4
            mb-8
            text-center
            md:w-1/4
          "
        >
          <GiftIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Incentivized Agents
          </h3>
          <p class="text-lg text-left">
            Tasks pay a small fee for future timing. This rewards agents for staying diligent and doing transactions on your behalf.
          </p>
        </div>

        <div
          class="
            flex flex-col
            items-center
            w-full
            px-4
            mb-8
            text-center
            md:w-1/4
          "
        >
          <RefreshCcwIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Recurring Transactions
          </h3>
          <p class="text-lg text-left">
            Specify once or many times a task can run. Tasks can execute as long as they have budget.
          </p>
        </div>

        <div
          class="
            flex flex-col
            items-center
            w-full
            px-4
            mb-8
            text-center
            md:w-1/4
          "
        >
          <BoxIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Decentralized Execution
          </h3>
          <p class="text-lg text-left">
            All tasks are triggered by a network of croncat agents. Your task parameters are sandboxed away from any tampering.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo'
import {
  ArrowRightCircleIcon,
  ClockIcon,
  CodeIcon,
  BoxIcon,
  GiftIcon,
  RefreshCcwIcon,
} from 'vue-feather-icons'

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ClockIcon,
    CodeIcon,
    BoxIcon,
    GiftIcon,
    RefreshCcwIcon,
  },

  metaInfo() {
    const title = 'Croncat - Developer Docs'
    const description =
      'Schedule tasks for any contract using standard cron expression, executed by a decentralized network of croncat agents. Useful for subscriptions, auctions & more'
    const ogImage = 'https://docs.cron.cat/OG_Image.png'

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description,
        },
        {
          key: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: ogImage,
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: ogImage,
        },
        {
          key: 'manifest',
          name: 'manifest',
          content: '/manifest.json',
        },
      ],
    }
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
