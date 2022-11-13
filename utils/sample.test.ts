import { add } from './sample';

describe('add', () => {
  it('더하기 함수는 덧셈을 한다.', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('add 2', () => {
    expect(add(1, 3)).toBe(4);
  });
});
