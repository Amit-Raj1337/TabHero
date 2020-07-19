import SearchButton from './SearchButton.svelte';

export default {
    title: 'SearchButton',
    component: SearchButton,
};

export const Default = () => ({
    Component: SearchButton,
    props: {
        text: 'Some Text Content',
    }
});