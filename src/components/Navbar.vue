<template>
    <nav>
        <ul class="links-content">
            <li>
                <a href="/" class="link">Home</a>
            </li>
            <li>
                <a href="/members" class="link">Members</a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'Navbar'
    })
</script>

<style>
    nav {
        width: 360px;
        height: 60px;
        display: flex;
        background: #495057;
        margin: 40px;
        border-radius: 16px;
    }

    .links-content {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .links-content li {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .links-content li a {
        font-size: 24px;
        font-weight: 800;
        color: #eccbd9;
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
    }

    .links-content li a:hover {
        color: #f26a8d;
    }

    @media(min-width: 500px) {
        nav {
            width: 490px;
        }
    }

    @media(min-width: 770px) {
        nav {
            width: 760px;
        }
    }
</style>