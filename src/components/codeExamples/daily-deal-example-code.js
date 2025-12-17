/**
 * Daily Deal Generator - Example
 * 
 * This example demonstrates a weighted random selection system for generating
 * daily deals in an e-commerce/gaming store. It uses probability weights to
 * control item distribution and discount percentages.
 */

/**
 * Weighted Random Selection Utility
 * Selects an item from an object where values represent probability weights
 * 
 * @param {Object} weights - Object with keys as options and values as weights
 * @returns {string} - Selected key based on weighted probability
 */
function weightedRandomSelect(weights) {
    // Calculate total weight
    const totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
    
    // Generate random number between 0 and totalWeight
    let random = Math.random() * totalWeight;
    
    // Find which item this random number falls into
    for (const [item, weight] of Object.entries(weights)) {
        random -= weight;
        if (random <= 0) {
            return item;
        }
    }
    
    // Fallback (shouldn't reach here)
    return Object.keys(weights)[0];
}

/**
 * Calculate discount percentage based on user tier
 * Uses weighted selection to create varied discount distribution
 * 
 * @param {boolean} hasSubscription - Whether user has active subscription
 * @returns {number} - Discount percentage (10-50%)
 */
function getDiscountPercentage(hasSubscription = false) {
    const subscriptionDiscounts = {
        10: 26,  // 26% chance of 10% discount
        15: 23,
        20: 15,
        25: 13,
        30: 7,
        35: 5,
        40: 4,
        45: 4,
        50: 3   // 3% chance of 50% discount
    };
    
    const standardDiscounts = {
        10: 30,
        15: 25,
        20: 22,
        25: 13,
        30: 5,
        35: 5
    };
    
    const discountWeights = hasSubscription ? subscriptionDiscounts : standardDiscounts;
    return parseInt(weightedRandomSelect(discountWeights));
}

/**
 * Generate a daily deal store item
 * 
 * @param {Object} params
 * @param {string} params.category - Item category ('Cards' or 'Shields')
 * @param {string} params.date - Date string in YYYY-MM-DD format
 * @param {boolean} params.hasSubscription - Whether this is for subscription users
 * @returns {Object} - Generated daily deal product
 */
function generateDailyDealItem({ category, date, hasSubscription = false }) {
    const dealType = 'discounted';
    const discountPercent = getDiscountPercentage(hasSubscription);
    
    // Create category prefix for ID (lowercase with dashes)
    const categoryPrefix = `${category.toLowerCase()}-daily-deal.`;
    
    let itemId;
    let itemDetails;
    
    switch (category) {
        case 'Cards': {
            // Weighted selection for card booster types
            const boosterTypes = {
                academy: 40,
                training: 35,
                wildcard: 25
            };
            
            const selectedBooster = weightedRandomSelect(boosterTypes);
            
            // Select booster pack size
            const boosterSizes = {
                'boosters1.': 40,
                'boosters2.': 35,
                'boosters3.': 25
            };
            const size = weightedRandomSelect(boosterSizes);
            
            itemId = categoryPrefix + `${size}${selectedBooster}`;
            
            // Mock store item data
            itemDetails = {
                title: `${selectedBooster.charAt(0).toUpperCase() + selectedBooster.slice(1)} Booster Pack`,
                subcategory: 'Booster',
                imageUrl: `/images/boosters/${selectedBooster}.png`,
                originalPrice: 100,
                provisions: { cards: 5, rarity: 'mixed' }
            };
            break;
        }
        
        case 'Shields': {
            // Weighted selection for shield categories
            const shieldCategories = {
                'shield-a': 50,
                'shield-b': 40,
                'shield-g': 10  // Rare subscription shield
            };
            
            const selectedShieldCategory = weightedRandomSelect(shieldCategories);
            
            // Subscription users get shield-g for free, skip other shields
            if (hasSubscription && !selectedShieldCategory.includes('shield-g')) {
                return null;
            }
            // Standard users can't get shield-g
            if (!hasSubscription && selectedShieldCategory.includes('shield-g')) {
                return null;
            }
            
            // Select shield variant number
            const shieldNumbers = {
                1: 25,
                2: 25,
                3: 25,
                4: 25
            };
            const number = weightedRandomSelect(shieldNumbers);
            
            itemId = categoryPrefix + `${selectedShieldCategory}${number}`;
            
            // Mock store item data
            itemDetails = {
                title: `${selectedShieldCategory.toUpperCase()}`,
                subcategory: 'Cosmetics',
                imageUrl: `/images/shields/${selectedShieldCategory}.png`,
                originalPrice: 150
            };
            break;
        }
        
        default:
            throw new Error(`Invalid category: ${category}`);
    }
    
    // Calculate discounted price
    const discountedPrice = Math.round(
        itemDetails.originalPrice * (1 - discountPercent / 100)
    );
    
    // Build final daily deal product
    return {
        id: itemId,
        generatedForDate: date,
        category: category,
        dealType: dealType,
        subcategory: itemDetails.subcategory,
        title: itemDetails.title,
        imageUrl: itemDetails.imageUrl,
        originalPrice: itemDetails.originalPrice,
        discountedPrice: discountedPrice,
        discountPercentage: discountPercent,
        savings: itemDetails.originalPrice - discountedPrice,
        provisions: itemDetails.provisions,
        hasSubscription: hasSubscription
    };
}

/**
 * Generate multiple daily deals for a given date
 * 
 * @param {Object} params
 * @param {string} params.date - Date string in YYYY-MM-DD format
 * @param {boolean} params.hasSubscription - Whether for subscription users
 * @param {number} params.totalDeals - Number of deals to generate
 * @returns {Array<Object>} - Array of daily deal products
 */
function generateDailyDeals({ date, hasSubscription = false, totalDeals = 10 }) {
    const deals = [];
    const categoryWeights = {
        Cards: 80,  // 80% chance of card deals
        Shields: 20 // 20% chance of shield deals
    };
    
    while (deals.length < totalDeals) {
        // Select category based on weights
        const category = weightedRandomSelect(categoryWeights);
        
        // Generate deal item
        const deal = generateDailyDealItem({ category, date, hasSubscription });
        
        // Skip if deal generation failed (e.g., subscription restrictions)
        if (!deal) {
            continue;
        }
        
        // Check for duplicates
        const isDuplicate = deals.some(existingDeal => existingDeal.id === deal.id);
        if (!isDuplicate) {
            deals.push(deal);
        }
    }
    
    return deals;
}

// Export all functions
export {
    weightedRandomSelect,
    getDiscountPercentage,
    generateDailyDealItem,
    generateDailyDeals
};

// Export code as formatted string for display
export const exampleCodeString = `function weightedRandomSelect(weights) {
    const totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
    let random = Math.random() * totalWeight;
    
    for (const [item, weight] of Object.entries(weights)) {
        random -= weight;
        if (random <= 0) {
            return item;
        }
    }
    return Object.keys(weights)[0];
}

function getDiscountPercentage(hasSubscription = false) {
    const subscriptionDiscounts = {
        10: 26, 15: 23, 20: 15, 25: 13,
        30: 7, 35: 5, 40: 4, 45: 4, 50: 3
    };
    
    const standardDiscounts = {
        10: 30, 15: 25, 20: 22, 25: 13, 30: 5, 35: 5
    };
    
    const discountWeights = hasSubscription ? subscriptionDiscounts : standardDiscounts;
    return parseInt(weightedRandomSelect(discountWeights));
}

function generateDailyDealItem({ category, date, hasSubscription = false }) {
    const dealType = 'discounted';
    const discountPercent = getDiscountPercentage(hasSubscription);
    const categoryPrefix = \`\${category.toLowerCase()}-daily-deal.\`;
    
    let itemId;
    let itemDetails;
    
    switch (category) {
        case 'Cards': {
            const boosterTypes = { academy: 40, training: 35, wildcard: 25 };
            const selectedBooster = weightedRandomSelect(boosterTypes);
            const boosterSizes = { 'boosters1.': 40, 'boosters2.': 35, 'boosters3.': 25 };
            const size = weightedRandomSelect(boosterSizes);
            itemId = categoryPrefix + \`\${size}\${selectedBooster}\`;
            itemDetails = {
                title: \`\${selectedBooster.charAt(0).toUpperCase() + selectedBooster.slice(1)} Booster Pack\`,
                subcategory: 'Booster',
                imageUrl: \`/images/boosters/\${selectedBooster}.png\`,
                originalPrice: 100,
                provisions: { cards: 5, rarity: 'mixed' }
            };
            break;
        }
        case 'Shields': {
            const shieldCategories = { 'shield-a': 50, 'shield-b': 40, 'shield-g': 10 };
            const selectedShieldCategory = weightedRandomSelect(shieldCategories);
            if (hasSubscription && !selectedShieldCategory.includes('shield-g')) return null;
            if (!hasSubscription && selectedShieldCategory.includes('shield-g')) return null;
            const shieldNumbers = { 1: 25, 2: 25, 3: 25, 4: 25 };
            const number = weightedRandomSelect(shieldNumbers);
            itemId = categoryPrefix + \`\${selectedShieldCategory}\${number}\`;
            itemDetails = {
                title: \`\${selectedShieldCategory.toUpperCase()} Protection\`,
                subcategory: 'Defense',
                imageUrl: \`/images/shields/\${selectedShieldCategory}.png\`,
                originalPrice: 150,
                provisions: { defense: 50, duration: '7 days' }
            };
            break;
        }
        default:
            throw new Error(\`Invalid category: \${category}\`);
    }
    
    const discountedPrice = Math.round(itemDetails.originalPrice * (1 - discountPercent / 100));
    return {
        id: itemId,
        generatedForDate: date,
        category: category,
        dealType: dealType,
        subcategory: itemDetails.subcategory,
        title: itemDetails.title,
        imageUrl: itemDetails.imageUrl,
        originalPrice: itemDetails.originalPrice,
        discountedPrice: discountedPrice,
        discountPercentage: discountPercent,
        savings: itemDetails.originalPrice - discountedPrice,
        provisions: itemDetails.provisions,
        hasSubscription: hasSubscription
    };
}

function generateDailyDeals({ date, hasSubscription = false, totalDeals = 10 }) {
    const deals = [];
    const categoryWeights = { Cards: 80, Shields: 20 };
    
    while (deals.length < totalDeals) {
        const category = weightedRandomSelect(categoryWeights);
        const deal = generateDailyDealItem({ category, date, hasSubscription });
        if (!deal) continue;
        const isDuplicate = deals.some(existingDeal => existingDeal.id === deal.id);
        if (!isDuplicate) deals.push(deal);
    }
    
    return deals;
}`;

// Example usage (uncomment to run):
/*
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Generate standard daily deals
const standardDeals = generateDailyDeals({
    date: today,
    hasSubscription: false,
    totalDeals: 10
});

// Generate subscription daily deals
const subscriptionDeals = generateDailyDeals({
    date: today,
    hasSubscription: true,
    totalDeals: 10
});

console.log('Standard Daily Deals:', standardDeals);
console.log('Subscription Daily Deals:', subscriptionDeals);
*/
