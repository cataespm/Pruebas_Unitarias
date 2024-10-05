import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
  const wrapper = mount(AboutView)
  it('', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  test(async () => {
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
