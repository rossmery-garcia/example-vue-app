<template>
    <div class="container">
        <table class="member-table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>SSN</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(member, index) in members" :key="index">
                    <td>{{ member.firstName }}</td>
                    <td>{{ member.lastName }}</td>
                    <td>{{ member.address }}</td>
                    <td>{{ member.ssn }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { Member } from '../types/Member';
    import { getMembers } from '../services/MemberService';
    import axios from 'axios';
    
    const members = ref<Member[]>([]);

    const loadMembers = async () => {
        const response = await axios.get('http://localhost:8081/api/members');
        members.value = response.data;
    }

    loadMembers();
</script>

<style>
    .container {
        width: 100%;
        margin: 0px auto;
    }
    .member-table {
       width: 760px;
       text-align: left;
       border-collapse: collapse;
       color: #343a40;
    }

    th, td {
        padding: 15px;
    }

    .member-table thead {
        border-bottom: 2px solid #eccbd9;
        color: #eccbd9;
    }
</style>