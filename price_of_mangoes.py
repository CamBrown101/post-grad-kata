def mango(quantity, price):
    threes = quantity / 3
    ans = (threes * 2 * price) + ((quantity % 3) * price)
    return ans
