# Step 1: Base image
FROM node:18-alpine as build

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the entire project to the container
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Start production server
CMD ["npm", "run", "start"]