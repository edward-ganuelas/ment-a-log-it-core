import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import IconButton from '@/components/IconButton.vue'

describe('IconButton.vue', () => {
    it('renders with Fontawesome Icon', () => {
        const iconClass = 'fas fa-check'
        const wrapper = shallowMount(IconButton, {
            propsData: { icon: iconClass }
        })
        const classList = document.querySelector('button i').classList;
        expect(classList.contains('fas')).to.be.true;
    })
})
