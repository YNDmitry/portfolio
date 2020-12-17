Webflow.require('ix2').init({
  events: {
    'e-28': {
      id: 'e-28',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-10', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small'],
      target: {
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
        id: 'cb167955-805e-382f-ccc8-060aeb0086db',
      },
      config: [
        {
          continuousParameterGroupId: 'a-10-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'ELEMENT',
          reverse: false,
          smoothing: 65,
          restingState: 30,
        },
        {
          continuousParameterGroupId: 'a-10-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'ELEMENT',
          reverse: false,
          smoothing: 65,
          restingState: 30,
        },
      ],
      createdOn: 1586937296141,
    },
    'e-31': {
      id: 'e-31',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-10', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small'],
      target: {
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
        id: '9360599a-6953-3105-44d1-de582d52d44e',
      },
      config: [
        {
          continuousParameterGroupId: 'a-10-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'ELEMENT',
          reverse: false,
          smoothing: 65,
          restingState: 30,
        },
        {
          continuousParameterGroupId: 'a-10-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'ELEMENT',
          reverse: false,
          smoothing: 65,
          restingState: 30,
        },
      ],
      createdOn: 1586937833031,
    },
    'e-32': {
      id: 'e-32',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-10', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small'],
      target: {
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
        id: 'c82adc08-0035-9fe0-7604-f697aad5de85',
      },
      config: [
        {
          continuousParameterGroupId: 'a-10-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'ELEMENT',
          reverse: false,
          smoothing: 65,
          restingState: 30,
        },
        {
          continuousParameterGroupId: 'a-10-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'ELEMENT',
          reverse: false,
          smoothing: 65,
          restingState: 30,
        },
      ],
      createdOn: 1586937848154,
    },
    'e-33': {
      id: 'e-33',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-10', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small'],
      target: {
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
        id: '0f162671-00bc-9b32-764f-3982b53bff74',
      },
      config: [
        {
          continuousParameterGroupId: 'a-10-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'ELEMENT',
          reverse: false,
          smoothing: 65,
          restingState: 30,
        },
        {
          continuousParameterGroupId: 'a-10-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'ELEMENT',
          reverse: false,
          smoothing: 65,
          restingState: 30,
        },
      ],
      createdOn: 1586937861613,
    },
    'e-41': {
      id: 'e-41',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-9', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small'],
      target: {
        selector: '.scroldiv',
        originalId: '5e94b0611c4758e56e76415c',
        appliesTo: 'CLASS',
      },
      config: [
        {
          continuousParameterGroupId: 'a-9-p',
          smoothing: 85,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1586944257875,
    },
    'e-42': {
      id: 'e-42',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-43' },
        instant: false,
      },
      mediaQueries: ['main', 'medium'],
      target: {
        selector: '.inform-box',
        originalId:
          '4c6934f6-8558-446e-cedd-473f38ab8f47',
        appliesTo: 'CLASS',
      },
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1586944726346,
    },
    'e-66': {
      id: 'e-66',
      eventTypeId: 'NAVBAR_OPEN',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-67',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.header',
        originalId:
          '4ea505b5-3bc0-1f18-84c0-35417f6d0ee7',
        appliesTo: 'CLASS',
      },
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1592598032991,
    },
    'e-67': {
      id: 'e-67',
      eventTypeId: 'NAVBAR_CLOSE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-29',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-66',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.header',
        originalId:
          '4ea505b5-3bc0-1f18-84c0-35417f6d0ee7',
        appliesTo: 'CLASS',
      },
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1592598032994,
    },
    'e-68': {
      id: 'e-68',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-23', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.s3-sticky',
        originalId:
          'e20ee0df-34a1-060b-89d9-5e23b8c440b3',
        appliesTo: 'CLASS',
      },
      config: [
        {
          continuousParameterGroupId: 'a-23-p',
          smoothing: 97,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1592837054522,
    },
    'e-69': {
      id: 'e-69',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-24',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-70',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.size-telephone',
        originalId:
          'fa33f786-4cff-d9f5-6750-01aae113494d',
        appliesTo: 'CLASS',
      },
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1592837626886,
    },
  },
  actionLists: {
    'a-10': {
      id: 'a-10',
      title: '3d-card',
      continuousParameterGroups: [
        {
          id: 'a-10-p',
          type: 'MOUSE_X',
          parameterLabel: 'Mouse X',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-10-n',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id:
                        'cb167955-805e-382f-ccc8-060aeb0086db',
                    },
                    yValue: -20,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-10-n-5',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {},
                    xValue: 570,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-10-n-2',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id:
                        'cb167955-805e-382f-ccc8-060aeb0086db',
                    },
                    yValue: 20,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-10-n-6',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {},
                    xValue: -74,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'a-10-p-2',
          type: 'MOUSE_Y',
          parameterLabel: 'Mouse Y',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-10-n-3',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id:
                        'cb167955-805e-382f-ccc8-060aeb0086db',
                    },
                    xValue: 10,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-10-n-7',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {},
                    yValue: 240,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-10-n-4',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id:
                        'cb167955-805e-382f-ccc8-060aeb0086db',
                    },
                    xValue: -10,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-10-n-8',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {},
                    yValue: -100,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1586936703182,
    },
    'a-9': {
      id: 'a-9',
      title: 'stil-anim',
      continuousParameterGroups: [
        {
          id: 'a-9-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-9-n-8',
                  actionTypeId: 'STYLE_SIZE',
                  config: {
                    delay: 0,
                    easing: 'linear',
                    duration: 500,
                    locked: false,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.progress-bar',
                      selectorGuids: ['f1533251-6b74-b1cc-1503-142658e81832'],
                    },
                    widthValue: 0,
                    widthUnit: '%',
                    heightUnit: 'PX',
                  },
                },
                {
                  id: 'a-9-n-10',
                  actionTypeId: 'STYLE_BACKGROUND_COLOR',
                  config: {
                    delay: 0,
                    easing: 'linear',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.progress-bar',
                      selectorGuids: ['f1533251-6b74-b1cc-1503-142658e81832'],
                    },
                    rValue: 255,
                    gValue: 0,
                    bValue: 0,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 12,
              actionItems: [
                {
                  id: 'a-9-n-2',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.right-ing',
                      selectorGuids: ['63c7a0db-9687-2f91-037f-f98764a8567c'],
                    },
                    yValue: 0,
                    xUnit: 'PX',
                    yUnit: '%',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 28,
              actionItems: [
                {
                  id: 'a-9-n-3',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.left-igm',
                      selectorGuids: ['e8905a80-8d6b-055d-b24b-d599c9fde94a'],
                    },
                    yValue: 200,
                    xUnit: 'PX',
                    yUnit: '%',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 56,
              actionItems: [
                {
                  id: 'a-9-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 900,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.right-ing',
                      selectorGuids: ['63c7a0db-9687-2f91-037f-f98764a8567c'],
                    },
                    yValue: 520,
                    xUnit: 'PX',
                    yUnit: '%',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-9-n-12',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.left-igm',
                      selectorGuids: ['e8905a80-8d6b-055d-b24b-d599c9fde94a'],
                    },
                    yValue: 70,
                    xUnit: 'PX',
                    yUnit: '%',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 55,
              actionItems: [
                {
                  id: 'a-9-n-4',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.left-igm',
                      selectorGuids: ['e8905a80-8d6b-055d-b24b-d599c9fde94a'],
                    },
                    yValue: 170,
                    xUnit: 'PX',
                    yUnit: '%',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 83,
              actionItems: [
                {
                  id: 'a-9-n-9',
                  actionTypeId: 'STYLE_SIZE',
                  config: {
                    delay: 0,
                    easing: 'linear',
                    duration: 500,
                    locked: false,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.progress-bar',
                      selectorGuids: ['f1533251-6b74-b1cc-1503-142658e81832'],
                    },
                    widthValue: 100,
                    widthUnit: '%',
                    heightUnit: 'PX',
                  },
                },
                {
                  id: 'a-9-n-11',
                  actionTypeId: 'STYLE_BACKGROUND_COLOR',
                  config: {
                    delay: 0,
                    easing: 'linear',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.progress-bar',
                      selectorGuids: ['f1533251-6b74-b1cc-1503-142658e81832'],
                    },
                    rValue: 255,
                    gValue: 0,
                    bValue: 0,
                    aValue: 1,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1586936088689,
    },
    'a-22': {
      id: 'a-22',
      title: 'navbar open',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-22-n',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 0,
                value: 'none',
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-menu',
                  selectorGuids: ['f7b22636-f92b-a987-baa4-720815cfa5c0'],
                },
              },
            },
            {
              id: 'a-22-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-menu',
                  selectorGuids: ['f7b22636-f92b-a987-baa4-720815cfa5c0'],
                },
                yValue: -100,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-22-n-5',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-menu',
                  selectorGuids: ['f7b22636-f92b-a987-baa4-720815cfa5c0'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-22-n-7',
              actionTypeId: 'TRANSFORM_SKEW',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-menu',
                  selectorGuids: ['f7b22636-f92b-a987-baa4-720815cfa5c0'],
                },
                xValue: -65,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-22-n-9',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.burger._2',
                  selectorGuids: [
                    'b56cdec5-42c6-8dad-2f45-1890ea1f77a3',
                    '61536739-09e2-fedc-683c-b8e92ec89627',
                  ],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-22-n-11',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  id:
                    'burger',
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-22-n-13',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.burger._3',
                  selectorGuids: [
                    'b56cdec5-42c6-8dad-2f45-1890ea1f77a3',
                    '26006a96-58b2-ac98-61b0-8c6ff5f5fcd6',
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-22-n-15',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                locked: false,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.burger._3',
                  selectorGuids: [
                    'b56cdec5-42c6-8dad-2f45-1890ea1f77a3',
                    '26006a96-58b2-ac98-61b0-8c6ff5f5fcd6',
                  ],
                },
                widthUnit: 'AUTO',
                heightUnit: 'PX',
              },
            },
            {
              id: 'a-22-n-17',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.burger._3',
                  selectorGuids: [
                    'b56cdec5-42c6-8dad-2f45-1890ea1f77a3',
                    '26006a96-58b2-ac98-61b0-8c6ff5f5fcd6',
                  ],
                },
                zValue: 0,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-22-n-19',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  id:
                    'burger',
                },
                zValue: 0,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-22-n-21',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  id:
                    'burger',
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-22-n-2',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 0,
                value: 'flex',
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-menu',
                  selectorGuids: ['f7b22636-f92b-a987-baa4-720815cfa5c0'],
                },
              },
            },
            {
              id: 'a-22-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-menu',
                  selectorGuids: ['f7b22636-f92b-a987-baa4-720815cfa5c0'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-22-n-6',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-menu',
                  selectorGuids: ['f7b22636-f92b-a987-baa4-720815cfa5c0'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-22-n-8',
              actionTypeId: 'TRANSFORM_SKEW',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-menu',
                  selectorGuids: ['f7b22636-f92b-a987-baa4-720815cfa5c0'],
                },
                xValue: 0,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-22-n-10',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.burger._2',
                  selectorGuids: [
                    'b56cdec5-42c6-8dad-2f45-1890ea1f77a3',
                    '61536739-09e2-fedc-683c-b8e92ec89627',
                  ],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-22-n-12',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  id:
                    'burger',
                },
                xValue: 1.5,
                yValue: 1.5,
                locked: true,
              },
            },
            {
              id: 'a-22-n-14',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.burger._3',
                  selectorGuids: [
                    'b56cdec5-42c6-8dad-2f45-1890ea1f77a3',
                    '26006a96-58b2-ac98-61b0-8c6ff5f5fcd6',
                  ],
                },
                xValue: 1.5,
                yValue: 1.5,
                locked: true,
              },
            },
            {
              id: 'a-22-n-16',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                locked: false,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.burger._3',
                  selectorGuids: [
                    'b56cdec5-42c6-8dad-2f45-1890ea1f77a3',
                    '26006a96-58b2-ac98-61b0-8c6ff5f5fcd6',
                  ],
                },
                widthValue: 35,
                widthUnit: 'PX',
                heightUnit: 'PX',
              },
            },
            {
              id: 'a-22-n-18',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.burger._3',
                  selectorGuids: [
                    'b56cdec5-42c6-8dad-2f45-1890ea1f77a3',
                    '26006a96-58b2-ac98-61b0-8c6ff5f5fcd6',
                  ],
                },
                zValue: 45,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-22-n-20',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  id:
                    'burger',
                },
                zValue: -45,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-22-n-22',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  id:
                    'burger',
                },
                yValue: 18,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1592598069164,
      useFirstGroupAsInitialState: true,
    },
    'a-29': {
      id: 'a-29',
      title: 'navbar close',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-29-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-menu',
                  selectorGuids: ['f7b22636-f92b-a987-baa4-720815cfa5c0'],
                },
                yValue: -100,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-29-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-menu',
                  selectorGuids: ['f7b22636-f92b-a987-baa4-720815cfa5c0'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-29-n-4',
              actionTypeId: 'TRANSFORM_SKEW',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-menu',
                  selectorGuids: ['f7b22636-f92b-a987-baa4-720815cfa5c0'],
                },
                xValue: 65,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-29-n-5',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.burger._2',
                  selectorGuids: [
                    'b56cdec5-42c6-8dad-2f45-1890ea1f77a3',
                    '61536739-09e2-fedc-683c-b8e92ec89627',
                  ],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-29-n-6',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  id:
                    'burger',
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-29-n-7',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.burger._3',
                  selectorGuids: [
                    'b56cdec5-42c6-8dad-2f45-1890ea1f77a3',
                    '26006a96-58b2-ac98-61b0-8c6ff5f5fcd6',
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-29-n-8',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                locked: false,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.burger._3',
                  selectorGuids: [
                    'b56cdec5-42c6-8dad-2f45-1890ea1f77a3',
                    '26006a96-58b2-ac98-61b0-8c6ff5f5fcd6',
                  ],
                },
                widthUnit: 'AUTO',
                heightUnit: 'PX',
              },
            },
            {
              id: 'a-29-n-9',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.burger._3',
                  selectorGuids: [
                    'b56cdec5-42c6-8dad-2f45-1890ea1f77a3',
                    '26006a96-58b2-ac98-61b0-8c6ff5f5fcd6',
                  ],
                },
                zValue: 0,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-29-n-10',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  id:
                    'burger',
                },
                zValue: 0,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-29-n-11',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  id:
                    'burger',
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-29-n',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 0,
                value: 'none',
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-menu',
                  selectorGuids: ['f7b22636-f92b-a987-baa4-720815cfa5c0'],
                },
              },
            },
          ],
        },
      ],
      createdOn: 1592598069164,
      useFirstGroupAsInitialState: false,
    },
    'a-23': {
      id: 'a-23',
      title: 'parallax',
      continuousParameterGroups: [
        {
          id: 'a-23-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-23-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.num-txt',
                      selectorGuids: ['3b808838-c7bc-49fe-659b-d11dd106b1fa'],
                    },
                    yValue: 20,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 5,
              actionItems: [
                {
                  id: 'a-23-n-3',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.num-txt._2',
                      selectorGuids: [
                        '3b808838-c7bc-49fe-659b-d11dd106b1fa',
                        '3ef31b58-c283-5eb2-70a8-b36c60b080de',
                      ],
                    },
                    yValue: 20,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 15,
              actionItems: [
                {
                  id: 'a-23-n-2',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.num-txt',
                      selectorGuids: ['3b808838-c7bc-49fe-659b-d11dd106b1fa'],
                    },
                    yValue: 250,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 20,
              actionItems: [
                {
                  id: 'a-23-n-5',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.num-txt._3',
                      selectorGuids: [
                        '3b808838-c7bc-49fe-659b-d11dd106b1fa',
                        '3571d5bb-a6f6-5d4c-3a1e-0ac601033662',
                      ],
                    },
                    yValue: 0,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 25,
              actionItems: [
                {
                  id: 'a-23-n-4',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.num-txt._2',
                      selectorGuids: [
                        '3b808838-c7bc-49fe-659b-d11dd106b1fa',
                        '3ef31b58-c283-5eb2-70a8-b36c60b080de',
                      ],
                    },
                    yValue: 120,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: 'a-23-n-7',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.num-txt._4',
                      selectorGuids: [
                        '3b808838-c7bc-49fe-659b-d11dd106b1fa',
                        '9d430707-0217-779e-2c11-e8c26efdb514',
                      ],
                    },
                    yValue: 20,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 35,
              actionItems: [
                {
                  id: 'a-23-n-6',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.num-txt._3',
                      selectorGuids: [
                        '3b808838-c7bc-49fe-659b-d11dd106b1fa',
                        '3571d5bb-a6f6-5d4c-3a1e-0ac601033662',
                      ],
                    },
                    yValue: 100,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: 'a-23-n-9',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.num-txt._5',
                      selectorGuids: [
                        '3b808838-c7bc-49fe-659b-d11dd106b1fa',
                        '486615b7-029b-a350-5b81-3ff529a04d8c',
                      ],
                    },
                    yValue: 20,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 45,
              actionItems: [
                {
                  id: 'a-23-n-8',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.num-txt._4',
                      selectorGuids: [
                        '3b808838-c7bc-49fe-659b-d11dd106b1fa',
                        '9d430707-0217-779e-2c11-e8c26efdb514',
                      ],
                    },
                    yValue: 100,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: 'a-23-n-11',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.num-txt._6',
                      selectorGuids: [
                        '3b808838-c7bc-49fe-659b-d11dd106b1fa',
                        '7a840ce9-c0cd-3ce8-754e-d865730308f3',
                      ],
                    },
                    yValue: 20,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 55,
              actionItems: [
                {
                  id: 'a-23-n-10',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.num-txt._5',
                      selectorGuids: [
                        '3b808838-c7bc-49fe-659b-d11dd106b1fa',
                        '486615b7-029b-a350-5b81-3ff529a04d8c',
                      ],
                    },
                    yValue: 110,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 80,
              actionItems: [
                {
                  id: 'a-23-n-12',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.num-txt._6',
                      selectorGuids: [
                        '3b808838-c7bc-49fe-659b-d11dd106b1fa',
                        '7a840ce9-c0cd-3ce8-754e-d865730308f3',
                      ],
                    },
                    yValue: 290,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1592837059370,
    },
    'a-24': {
      id: 'a-24',
      title: 'span-anim',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-24-n-8',
              actionTypeId: 'STYLE_TEXT_COLOR',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 200,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.red-color',
                  selectorGuids: ['35b53668-f036-ef3a-27ed-809a98cb14e1'],
                },
                rValue: 255,
                gValue: 0,
                bValue: 0,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-24-n-2',
              actionTypeId: 'STYLE_TEXT_COLOR',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 50,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.red-color',
                  selectorGuids: ['35b53668-f036-ef3a-27ed-809a98cb14e1'],
                },
                rValue: 255,
                gValue: 0,
                bValue: 0,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-24-n-3',
              actionTypeId: 'STYLE_TEXT_COLOR',
              config: {
                delay: 1000,
                easing: 'easeInOut',
                duration: 50,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.red-color',
                  selectorGuids: ['35b53668-f036-ef3a-27ed-809a98cb14e1'],
                },
                rValue: 255,
                gValue: 255,
                bValue: 255,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-24-n-9',
              actionTypeId: 'STYLE_TEXT_COLOR',
              config: {
                delay: 1000,
                easing: 'easeInOut',
                duration: 50,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.red-color',
                  selectorGuids: ['35b53668-f036-ef3a-27ed-809a98cb14e1'],
                },
                rValue: 255,
                gValue: 0,
                bValue: 0,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-24-n-10',
              actionTypeId: 'STYLE_TEXT_COLOR',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.red-color',
                  selectorGuids: ['35b53668-f036-ef3a-27ed-809a98cb14e1'],
                },
                rValue: 255,
                gValue: 255,
                bValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      createdOn: 1592837630633,
      useFirstGroupAsInitialState: true,
    },
    slideInBottom: {
      id: 'slideInBottom',
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: 'main', min: 992, max: 10000 },
      { key: 'medium', min: 768, max: 991 },
      { key: 'small', min: 480, max: 767 },
      { key: 'tiny', min: 0, max: 479 },
    ],
  },
})