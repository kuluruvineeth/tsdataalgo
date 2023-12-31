import QueueV2 from '../QueueV2';

describe('Queue', () => {
  test('constructor', () => {
    const q = new QueueV2();
    expect(q).toBeTruthy();
    expect(q.length).toBe(0);
  });

  test('enqueue()', () => {
    const q = new QueueV2();
    q.enqueue(100);
    expect(q.length).toBe(1);
    q.enqueue(200);
    expect(q.length).toBe(2);
  });

  test('dequeue()', () => {
    const q = new QueueV2();
    q.enqueue(100);
    expect(q.length).toBe(1);
    q.enqueue(200);
    expect(q.length).toBe(2);
    expect(q.dequeue()).toBe(100);
    expect(q.length).toBe(1);
    expect(q.dequeue()).toBe(200);
    expect(q.length).toBe(0);
    expect(q.dequeue()).toBe(undefined);
  });

  test('isEmpty()', () => {
    const q = new QueueV2();
    expect(q.isEmpty()).toBeTruthy();
    q.enqueue(100);
    expect(q.isEmpty()).toBeFalsy();
    q.dequeue();
    expect(q.isEmpty()).toBeTruthy();
  });

  test('length', () => {
    const q = new QueueV2();
    q.enqueue(100);
    expect(q.length).toBe(1);
    q.enqueue(200);
    expect(q.length).toBe(2);
    q.dequeue();
    expect(q.length).toBe(1);
    q.enqueue(300);
    expect(q.length).toBe(2);
  });

  test('front()', () => {
    const q = new QueueV2();
    q.enqueue(100);
    expect(q.front()).toBe(100);
    q.enqueue(200);
    expect(q.front()).toBe(100);
    q.dequeue();
    expect(q.front()).toBe(200);
    q.enqueue(300);
    expect(q.front()).toBe(200);
    q.dequeue();
    q.dequeue();
    expect(q.front()).toBe(undefined);
  });

  test('back()', () => {
    const q = new QueueV2();
    q.enqueue(100);
    expect(q.back()).toBe(100);
    q.enqueue(200);
    expect(q.back()).toBe(200);
    q.dequeue();
    expect(q.back()).toBe(200);
    q.enqueue(300);
    expect(q.back()).toBe(300);
    q.dequeue();
    q.dequeue();
    expect(q.back()).toBe(undefined);
  });

  test('integration', () => {
    const q = new QueueV2();
    q.enqueue(100);
    expect(q.length).toBe(1);
    expect(q.dequeue()).toBe(100);
    expect(q.length).toBe(0);
    q.enqueue(200);
    expect(q.length).toBe(1);
    expect(q.dequeue()).toBe(200);
  });
});
