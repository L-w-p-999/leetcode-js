var middle = function(head){
    let fast = head, slow = head, prev = head;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null; // 断链
    return slow;
};

var mergeLists = function(list1, list2){
    let dummyNode = new ListNode(0);
    let cur = dummyNode;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }

    cur.next = list1 ?? list2;
    return dummyNode.next;
};

var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let head2 = middle(head);
    head = sortList(head);
    head2 = sortList(head2);

    // ✅ 修复点 1：函数名改正确
    return mergeLists(head, head2);
};

var mergeKLists = function(lists) {
    let head = null;   // 用来记录真正的总链表头
    let tail = null;   // 当前总链表尾巴

    for (let i = 0; i < lists.length; i++) {
        if (lists[i] === null) continue;

        if (head === null) {
            // 第一次遇到非空链表
            head = lists[i];
            tail = lists[i];
        } else {
            tail.next = lists[i];
        }

        // 把 tail 移动到当前链表的尾部
        while (tail.next) {
            tail = tail.next;
        }
    }

    // ✅ 修复点 2：对真正拼好的头结点排序
    return sortList(head);
};
