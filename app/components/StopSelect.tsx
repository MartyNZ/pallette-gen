import {Listbox} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/24/solid'
import clsx from 'clsx'

import {DEFAULT_STOPS} from '~/lib/constants'

import {inputClasses, labelClasses} from './Palette'

type StopSelectProps = {
  value: string
  onChange: (value: string) => void
}

export default function StopSelect(props: StopSelectProps) {
  const {value, onChange} = props

  return (
    <Listbox value={value} onChange={onChange} as="div" className="relative">
      <Listbox.Button
        className={clsx(inputClasses, `font-mono tabular-nums flex items-center gap-2`)}
      >
        {value}
        <ChevronDownIcon className="w-5" />
      </Listbox.Button>
      <Listbox.Options
        className={clsx(
          'border border-gray-200 font-mono tabular-nums absolute z-50 w-full bg-white shadow-lg divide-y divide-gray-200 translate-y-1 focus:outline-none'
        )}
      >
        {DEFAULT_STOPS.filter((stop) => stop !== 0 && stop !== 1000).map((stop) => (
          <Listbox.Option
            key={stop}
            value={stop}
            className={clsx(
              `p-2 hover:bg-first-700 hover:text-white focus-visible:bg-first-700 focus-visible:text-white cursor-pointer
              data-[headlessui-state=active]:bg-first-700 data-[headlessui-state=active]:text-white transition-colors duration-100
              `
            )}
          >
            {stop}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
