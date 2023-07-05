<template>
  <span class="post-date text-faded" :title="humanFriendlyDate()">
    {{ diffForHumans() }}
  </span>
</template>
<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedDate from "dayjs/plugin/localizedFormat";
dayjs.extend(relativeTime);
dayjs.extend(localizedDate);

export default {
  props: {
    timeStamp: {
      type: Number,
      required: true,
    },
  },
  methods: {
    diffForHumans() {
      return dayjs.unix(this.timeStamp).fromNow();
    },
    humanFriendlyDate() {
      return dayjs.unix(this.timeStamp).format("llll");
    },
  },
};
</script>
