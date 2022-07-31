<template>
    <form @submit.prevent="saveMember" class="member-form">
        <div class="field">
            <label for="firstName">First Name *</label>
            <input type="text" v-model="member.firstName" required>
        </div>
        <div class="field">
            <label for="lastName">Last Name *</label>
            <input type="text" v-model="member.lastName" required>
        </div>
        <div class="field">
            <label for="address">Address *</label>
            <input type="text" v-model="member.address" required>
        </div>
        <div class="field">
            <label for="ssn">SSN *</label>
            <input type="text" v-model="member.ssn" required>
        </div>
        <div class="btns">
            <button class="reset-btn" @click="clearForm" type="button">Reset</button>
            <button class="save-btn" type="submit">Save</button>
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
                if(this.ValidateInputs()) {
                    try {
                        const response =  await createMember(this.member);
                        this.clearForm();
                        setTimeout(() => {
                            alert('Member successfully created');
                        }, 500);
                    }catch (err) {
                        let errorMessage = err.response.data.message;
                        console.error(err.response.data);
                        alert(`Failed to add member: ${errorMessage}`);
                    }
                }else {
                    alert('Please complete all the fields:\n- First Name, Last Name, Address: more than one character and no spaces\n- SSN: numbers and dashes (format ###-##-####)');
                }
            },
            clearForm() {
                this.member = {} as Member;
            },
            ValidateInputs() {
                if(!this.member.firstName || !this.member.lastName || !this.member.address || !this.member.ssn) return false;

                if(this.member.firstName.trim().length <= 1 || this.member.lastName.trim().length <= 1 || this.member.address.trim().length <= 1) return false;

                if(!this.validateSsnInput()) return false;

                return true;
            },
            validateSsnInput() {
                const regex = /^\d{3}-\d{2}-\d{4}$/;

                if (regex.test(this.member.ssn) === false) return false;

                return true;
            }
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