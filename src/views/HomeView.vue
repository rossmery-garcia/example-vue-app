<template>
    <form @submit.prevent="saveMember" class="member-form">
        <div class="field">
            <label for="firstName">First Name</label>
            <input type="text" v-model="member.firstName">
        </div>
        <div class="field">
            <label for="lastName">Last Name</label>
            <input type="text" v-model="member.lastName">
        </div>
        <div class="field">
            <label for="address">Address</label>
            <input type="text" v-model="member.address">
        </div>
        <div class="field">
            <label for="ssn">SSN</label>
            <input type="text" v-model="member.ssn">
        </div>
        <div class="btns">
            <button class="reset-btn">Reset</button>
            <button class="save-btn">Save</button>
        </div>
    </form>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { Member } from '../types/Member';
    import { createMember } from '../services/MemberService';

    export default defineComponent({
        data() {
            return {
                member: {} as Member
            }
        },
        methods: {
            async saveMember() {
                const response =  await createMember(this.member);
                console.log("response api: ", response);
            },
        }
    })
</script>

<style>
    .member-form {
        min-width: 550px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background: #fff;
        border-radius: 16px;
    }

    .member-form .field {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .member-form .field label {
        font-size: 14px;
        color: #343a40;
    }

    .member-form .field input {
        padding: 10px;
        border: none;
        outline: none;
        background: #f3f4f6;
        border-radius: 8px;
        color: #343a40;
        font-weight: 600;
    }

    .member-form .btns {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 10px;
    }

    .member-form .btns .reset-btn {
        width: 120px;
        padding: 10px 15px;
        background: #eccbd9;
        border: 2px solid #eccbd9;
        border-radius: 8px;
        color: #fff;
        font-weight: 800;
        text-transform: uppercase;
        cursor: pointer;
    }

    .member-form .btns .reset-btn:hover {
        color: #343a40;
        border: 2px solid #343a40;
    }

    .member-form .btns .save-btn {
        width: 120px;
        padding: 10px 15px;
        background: #343a40;
        border: 2px solid #343a40;
        border-radius: 8px;
        color: #eccbd9;
        font-weight: 800;
        text-transform: uppercase;
        cursor: pointer;
    }

    .member-form .btns .save-btn:hover {
        color: #343a40;
        background: #fff;
    }
</style>