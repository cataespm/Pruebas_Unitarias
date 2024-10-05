import { describe, expect, it, test } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  const wrapper = mount(HomeView)
  it('', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test(async () => {
    const li = wrapper.findAll('li')

    expect(li[0].text()).toBe('Post 1')
    expect(li).toHaveLength(4)
  })
})
