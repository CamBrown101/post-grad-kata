geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


def goose_filter(birds):
    ans = []
    global geese
    for bird in birds:
        if not bird in geese:
            ans.append(bird)
    return ans
