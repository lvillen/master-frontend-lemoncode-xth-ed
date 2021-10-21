<template>
  <div class="organization">
    <h2>Me he creado</h2>
    <input v-model="organization" />
    <ul>
      <li v-for="member in members" :key="member.id">
        <div class="flex align-items-center justify-content-start">
          <p>{{ member.login }}</p>
          <img :src="member.avatar_url" alt="" />
        </div>
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getMembers } from '@/services/api-call'
import { MemberEntity } from '@/services/api-model' 


export default defineComponent({
  data() {
    return {
      organization: 'lemoncode',
      members: [] as MemberEntity[],
    }
  },
  async created() {
    this.members = await getMembers(this.organization)
  }
})
</script>

<style>
img {
  width: 50px;
  height: 50px;
}
</style>
