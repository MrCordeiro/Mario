const MOVE_SPEED = 120
const JUMP_FORCE = 360
const BIG_JUMP_FORCE = 550
let CURRENT_JUMP_FORCE = JUMP_FORCE
const ENEMY_SPEED = 20
const FALL_DEATH = 600

let isJumping = true


layers(['obj', 'ui'], 'obj')

const maps = [
  [
    '                              ',
    '                              ',
    '                              ',
    '                              ',
    '                              ',
    '    %   =*=%=                 ',
    '                              ',
    '                      -+      ',
    '             ^   ^    ()      ',
    'xxxxxxxxxxxxxxxxxxxxxxxx    xx',
  ], [
    '£                              £',
    '£                              £',
    '£                              £',
    '£        @@@@@      s          £',
    '£                 s s s        £',
    '£               s s s s s    -+£',
    '£      !      s s s s s s    ()£',
    'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
  ]
]


const levelConfig = {
  width: 20,
  height: 20,
  '=' : [sprite('brick'), solid()],
  'x' : [sprite('block'), solid()],
  '$' : [sprite('coin'), 'coin'],
  '%' : [sprite('question'), 'coin-surprise', solid()],
  '*' : [sprite('question'), 'mushroom-surprise', solid()],   
  '}' : [sprite('unboxed'), solid()], 
  '(' : [sprite('pipe-left'), scale(0.5), solid()],
  ')' : [sprite('pipe-right'), scale(0.5), solid()], 
  '-' : [sprite('pipe-top-left'), scale(0.5), solid(), 'pipe'],
  '+' : [sprite('pipe-top-right'), scale(0.5), solid(), 'pipe'], 
  '^' : [sprite('goomba'), solid(), 'dangerous'], 
  '#' : [sprite('mushroom'), 'mushroom', body()], 
  '£' : [sprite('blue-brick'), solid(),scale(0.5)],
  'z' : [sprite('blue-block'), solid(), scale(0.5)], 
  '@' : [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'],
  '!' : [sprite('blue-goomba'), 'dangerous', scale(0.5)],
  's' : [sprite('blue-steel'), solid(), scale(0.5)],  
}

const levelIndex = args.level ?? 0 
const gameLevel = addLevel(maps[levelIndex], levelConfig)