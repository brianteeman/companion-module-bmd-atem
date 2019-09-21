import { AtemState, Enums } from 'atem-connection'
import { CompanionInputFieldDropdown, CompanionInputFieldNumber } from '../../../instance_skel_types'
import {
  CHOICES_SSRCBOXES,
  GetAuxIdChoices,
  GetDSKIdChoices,
  GetMEIdChoices,
  GetMultiviewerIdChoices,
  GetSourcesListForType,
  GetSuperSourceIdChoices,
  GetTransitionStyleChoices,
  GetUSKIdChoices,
  SourcesToChoices
} from './choices'
import { ModelSpec } from './models'
import { iterateTimes } from './util'

export function AtemMESourcePicker(model: ModelSpec, state: AtemState, id: number): CompanionInputFieldDropdown {
  return {
    id: `input${id ? id : ''}`,
    label: `Input${id ? ` Option ${id}` : ''}`,
    type: 'dropdown',
    default: 1,
    choices: SourcesToChoices(GetSourcesListForType(model, state, 'me'))
  }
}
export function AtemTransitionStylePicker(skipSting?: boolean): CompanionInputFieldDropdown {
  return {
    type: 'dropdown',
    id: 'style',
    label: 'Transition Style',
    default: Enums.TransitionStyle.MIX,
    choices: GetTransitionStyleChoices(skipSting)
  }
}
export function AtemTransitionRatePicker(): CompanionInputFieldNumber {
  return {
    type: 'number',
    id: 'rate',
    label: 'Transition Rate',
    min: 1,
    max: 250,
    range: true,
    default: 25
  }
}
export function AtemMEPicker(model: ModelSpec, id: number): CompanionInputFieldDropdown {
  return {
    id: `mixeffect${id ? id : ''}`,
    label: `M/E${id ? ` Option ${id}` : ''}`,
    type: 'dropdown',
    default: id > 0 ? id - 1 : 0,
    choices: GetMEIdChoices(model)
  }
}
export function AtemDSKPicker(model: ModelSpec): CompanionInputFieldDropdown {
  return {
    type: 'dropdown',
    label: 'Key',
    id: 'key',
    default: 0,
    choices: GetDSKIdChoices(model)
  }
}
export function AtemUSKPicker(model: ModelSpec): CompanionInputFieldDropdown {
  return {
    type: 'dropdown',
    label: 'Key',
    id: 'key',
    default: 0,
    choices: GetUSKIdChoices(model)
  }
}
export function AtemAuxPicker(model: ModelSpec): CompanionInputFieldDropdown {
  return {
    type: 'dropdown',
    id: 'aux',
    label: 'AUX',
    default: 0,
    choices: GetAuxIdChoices(model)
  }
}
export function AtemMultiviewerPicker(model: ModelSpec): CompanionInputFieldDropdown {
  return {
    type: 'dropdown',
    id: 'multiViewerId',
    label: 'MV',
    default: 0,
    choices: GetMultiviewerIdChoices(model)
  }
}
export function AtemKeyFillSourcePicker(model: ModelSpec, state: AtemState): CompanionInputFieldDropdown {
  return {
    type: 'dropdown',
    label: 'Fill Source',
    id: 'fill',
    default: 1,
    choices: SourcesToChoices(GetSourcesListForType(model, state, 'me'))
  }
}
export function AtemKeyCutSourcePicker(model: ModelSpec, state: AtemState): CompanionInputFieldDropdown {
  return {
    type: 'dropdown',
    label: 'Key Source',
    id: 'cut',
    default: 0,
    choices: SourcesToChoices(GetSourcesListForType(model, state, 'me'))
  }
}
export function AtemAuxSourcePicker(model: ModelSpec, state: AtemState): CompanionInputFieldDropdown {
  return {
    type: 'dropdown',
    label: 'Input',
    id: 'input',
    default: 1,
    choices: SourcesToChoices(GetSourcesListForType(model, state, 'aux'))
  }
}
export function AtemSuperSourceBoxPicker(): CompanionInputFieldDropdown {
  return {
    type: 'dropdown',
    id: 'boxIndex',
    label: 'Box #',
    default: 0,
    choices: CHOICES_SSRCBOXES
  }
}
export function AtemSuperSourceIdPicker(model: ModelSpec): CompanionInputFieldDropdown | undefined {
  const choices = GetSuperSourceIdChoices(model)
  if (choices.length > 1) {
    return {
      type: 'dropdown',
      id: 'ssrcId',
      label: 'Super Source',
      default: 0,
      choices
    }
  } else {
    return undefined
  }
}
export function AtemSuperSourceBoxSourcePicker(model: ModelSpec, state: AtemState): CompanionInputFieldDropdown {
  return {
    type: 'dropdown',
    id: 'source',
    label: 'Source',
    default: 0,
    choices: SourcesToChoices(GetSourcesListForType(model, state, 'me'))
  }
}
export function AtemMultiviewSourcePicker(model: ModelSpec, state: AtemState): CompanionInputFieldDropdown {
  return {
    type: 'dropdown',
    id: 'source',
    label: 'Source',
    default: 0,
    choices: SourcesToChoices(GetSourcesListForType(model, state, 'mv'))
  }
}
export function AtemMultiviewWindowPicker(model: ModelSpec): CompanionInputFieldDropdown {
  const choices = model.multiviewerFullGrid
    ? iterateTimes(16, i => ({
        id: i,
        label: `Window ${i + 1}`
      }))
    : iterateTimes(8, i => ({
        id: i + 2,
        label: `Window ${i + 3}`
      }))

  return {
    type: 'dropdown',
    id: 'windowIndex',
    label: 'Window #',
    default: 2,
    choices
  }
}
