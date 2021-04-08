geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


def goose_filter(birds):
    ans = []
    for bird in birds:
        if bird in geese:
            ans.append(bird)
    return ans


print(goose_filter(["African", "Roman Tufted"]))
