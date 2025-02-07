# React Native FlatList Key Extraction Bug

This repository demonstrates a common bug in React Native's FlatList component when dealing with large datasets and the `keyExtractor` prop. Incorrect implementation of `keyExtractor` can lead to inconsistent rendering, with items disappearing, duplicating, or appearing out of order.

## Problem
The `keyExtractor` prop is crucial for FlatList's efficient rendering. If it doesn't provide unique keys for each item, or if the keys change, FlatList struggles to manage the list's state effectively.

## Solution
The solution involves ensuring that the `keyExtractor` function consistently returns unique identifiers for each item in the dataset.  Using a unique field from the data itself (such as an ID) is generally preferred over generating keys based on index, as the latter can cause issues when items are added, removed, or reordered.  This ensures that the FlatList can correctly identify and update each item, preventing rendering inconsistencies.