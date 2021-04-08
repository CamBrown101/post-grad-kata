def mango(quantity, price):
    threes = quantity / 3
    ans = (threes + (quantity % 3)) * price
    return quantity * 2
