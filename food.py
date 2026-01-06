import numpy as np
import pandas as pd

# Fun food combo generator using numpy and pandas
def food_combo_generator():
    # List of food items
    foods = ['Pizza', 'Burger', 'Sushi', 'Taco', 'Pasta', 'Ramen', 'Ice Cream', 'Donut', 'Curry', 'Fries']
    
    # Randomly select two food items
    combo = np.random.choice(foods, size=2, replace=False)
    
    # Calculate a random "deliciousness score" (because why not?)
    deliciousness_score = np.random.randint(50, 101)  # Score between 50 and 100
    
    # Create a pandas DataFrame to display the combo and score
    df = pd.DataFrame({
        'Food 1': [combo[0]],
        'Food 2': [combo[1]],
        'Deliciousness Score': [deliciousness_score]
    })
    
    # Add a funny comment based on the score
    if deliciousness_score >= 90:
        comment = "🔥 Legendary Combo! You're a food genius! 🔥"
    elif deliciousness_score >= 70:
        comment = "👌 Solid Choice! Your taste buds are happy! 👌"
    else:
        comment = "🤔 Hmm... Interesting combo. Bold move! 🤔"
    
    print("🍽️ Random Food Combo Generator 🍽️")
    print(df)
    print(f"\n💬 {comment}\n")

food_combo_generator()
