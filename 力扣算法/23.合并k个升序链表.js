var mergeKLists = function(lists) {
    const pq = new MinPriorityQueue(node => node.val);
    for (const head of lists) {
        if (head) {
            pq.enqueue(head); // 把所有非空链表的头节点入堆
        }
    }

    const dummy = new ListNode(); // 哨兵节点，作为合并后链表头节点的前一个节点
    let cur = dummy;
    while (!pq.isEmpty()) { // 循环直到堆为空
        const node = pq.dequeue(); // 剩余节点中的最小节点
        if (node.next) { // 下一个节点不为空
            pq.enqueue(node.next); // 下一个节点有可能是最小节点，入堆
        }
        cur.next = node; // 把 node 添加到新链表的末尾
        cur = cur.next; // 准备合并下一个节点
    }
    return dummy.next; // 哨兵节点的下一个节点就是新链表的头节点
};

//这个算法实现和我想的是一样的。它写的放空处理很严谨