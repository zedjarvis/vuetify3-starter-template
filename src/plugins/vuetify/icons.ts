import { Icon } from '@iconify/vue'
import { h } from 'vue'
import type { IconAliases } from 'vuetify'

const aliases: IconAliases = {
  collapse: 'carbon-chevron-up',
  complete: 'carbon-checkmark',
  cancel: 'carbon-close',
  close: 'carbon-close',
  delete: 'carbon-close-filled',
  clear: 'carbon-close',
  success: 'carbon-checkmark-outline',
  info: 'carbon-information',
  warning: 'carbon-information',
  error: 'carbon-close',
  prev: 'carbon-chevron-left',
  next: 'carbon-chevron-right',
  checkboxOn: 'carbon-checkbox-checked',
  checkboxOff: 'carbon-checkbox',
  checkboxIndeterminate: 'carbon-checkbox-indeterminate',
  delimiter: 'carbon-radio-button',
  sort: 'carbon-arrow-up',
  expand: 'carbon-chevron-down',
  menu: 'carbon-menu',
  subgroup: 'carbon-caret-down',
  dropdown: 'carbon-chevron-down',
  radioOn: 'carbon-radio-button-checked',
  radioOff: 'carbon-radio-button',
  edit: 'carbon-edit',
  ratingEmpty: 'carbon-star',
  ratingFull: 'carbon-star-filled',
  ratingHalf: 'carbon-star-half',
  loading: 'carbon-rotate',
  first: 'carbon-previous-outline',
  last: 'carbon-next-outline',
  unfold: 'carbon-chevron-sort',
  file: 'carbon-attachment',
  plus: 'carbon-add',
  minus: 'carbon-subtract',
  sortAsc: 'carbon-sort-ascending',
  sortDesc: 'carbon-sort-descending',
  calendar: 'carbon-calendar',
}

export const iconify = {

  component: (props: any) => h(Icon, props),
}

export const icons = {
  defaultSet: 'iconify',
  aliases,
  sets: {
    iconify,
  },
}
