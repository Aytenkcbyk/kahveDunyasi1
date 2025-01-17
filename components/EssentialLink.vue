<template>
    <a :href="link" target="_blank" class="essential-link">
        <div v-if="icon" class="essential-link-icon">
            <i :class="icon" />
        </div>

        <div class="essential-link-content">
            <div class="essential-link-title">{{ title }}</div>
            <div v-if="caption" class="essential-link-caption">{{ caption }}</div>
        </div>
    </a>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
    title: string;
    caption?: string;
    link?: string;
    icon?: string;
}

withDefaults(defineProps<EssentialLinkProps>(), {
    caption: '',
    link: '#',
    icon: '',
});
</script>

<style scoped>
.essential-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding: 8px 12px;
    transition: background-color 0.2s ease;
}

.essential-link:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.essential-link-icon {
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.essential-link-icon i {
    font-size: 20px;
}

.essential-link-content {
    display: flex;
    flex-direction: column;
}

.essential-link-title {
    font-weight: bold;
    font-size: 16px;
}

.essential-link-caption {
    font-size: 14px;
    color: gray;
}
</style>
