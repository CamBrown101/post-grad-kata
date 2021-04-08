def mango(quantity, price):
    free = quantity // 3
    remainder = quantity - free
    return remainder * price


print(mango(9, 5))
