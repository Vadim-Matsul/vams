import mitt from 'mitt';

export const MittEventBusEvents = {
  /** Немедленно открыть описание шагов в StepperBlock */
  OPEN_STEPPERBLOCK_STEPS: 'OPEN_STEPPERBLOCK_STEPS',
} as const;

type MittEvents = {
  [MittEventBusEvents.OPEN_STEPPERBLOCK_STEPS]: void;
};

export const mittEmitter = mitt<MittEvents>();
