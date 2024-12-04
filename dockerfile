# Step 1: Base image
FROM node:18-alpine as dev

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the entire project to the container
COPY . .

# Step 6: Expose the default development port
EXPOSE 3000

# Step 7: Start the development server
CMD ["npm", "run", "dev"]