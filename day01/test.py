for tc in range(1, int(input()) + 1):
    n, m = map(int, input().split())
    mat = [[0] * (n + 1) for _ in range(n + 1)] # mutable / immutable 차이

    for _ in range(m):
        x, y = map(int, input().split())
        mat[x][y] = 1
        mat[y][x] = 1
    visited = [False] * (n + 1)
    
    # for start in range(1, n + 1):
    #     stack = [(start, 1)] #(점의 번호, 현재 깊이)
    #     visited[start] = True

    #     while stack:
    #         now = stack.pop()
    #         for nxt in range(1, n + 1):
    #             if mat[now][nxt] and not visited[nxt]:
    #                 visited[nxt] = True
    for start in range(1, n + 1):
        queue = [(start, 1)]
        visited = [False] * (n + 1)
        visited[start] = True

        while queue:
            now = queue.pop(0)

            for nxt