import { LinkedList } from '../LinkedList';

type LinkedListConstructor = new <T>() => LinkedList<T>;

export function TestLinkedList(LinkedList: LinkedListConstructor) {
  describe('with filled list (push)', () => {
      let list: LinkedList<number> = new LinkedList<number>;

      beforeEach(() => {
        list = new LinkedList<number>();
        list.push(1);
        list.push(2);
        list.push(3);
      });

      it('should return false for isEmpty when list is not empty',() => {
        expect(list.isEmpty()).toBeFalsy()
      })

      it('should return correct node for get',() => {
        expect(list.get(1)).toBe(2)
      })

      it('should push nodes to the list and return correct head and tail',() => {
        expect(list.get(0)).toBe(3)
        expect(list.get(2)).toBe(1)
      })

      it('should pop nodes from the list and return correct head and tail',() => {
        expect(list.pop()).toBe(3)
        expect(list.get(0)).toBe(2)
        expect(list.get(1)).toBe(1)
      })
  });

  describe('with filled list (append)',() => {
    let list: LinkedList<number> = new LinkedList<number>()

    beforeEach(() => {
        list = new LinkedList<number>();
        list.append(1);
        list.append(2);
        list.append(3);
    })

    it('should append nodes to the list and return correct head and tail',() => {
        expect(list.get(0)).toBe(1)
        expect(list.get(2)).toBe(3)
    })
  })
}
