import React from 'react'

function Form() {
  return (
    <>
      {/* <label htmlFor="name">Enter Your Name : </label>
      <input type="text" placeholder='Enter Your Name...  ' /> */}
 

<div class="flex items-center justify-center h-screen bg-slate-900">
  <div class="relative w-full max-w-md">
    <div class="absolute inset-0 -z-10 animate-weave">
      <svg class="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="weave" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M0 50L50 0M50 50L100 0" stroke="#D1D5DB" stroke-width="2"></path>
          </pattern>
        </defs>
        <rect width="500" height="500" fill="url(#weave)"></rect>
      </svg>
    </div>
    <div class="rounded-lg border bg-card text-card-foreground p-8 shadow-lg" data-v0-t="card">
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="whitespace-nowrap tracking-tight text-2xl font-bold text-white">Contact Us</h3>
        <p class="text-sm text-muted-foreground text-white">Fill out the form below to get in touch.</p>
      </div>
      <div class="p-6 space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-2">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
              for="name"
            >
              Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="name"
              placeholder="John Doe"
            />
          </div>
          <div class="space-y-2">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
              for="email"
            >
              Email
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="john@example.com"
              type="email"
            />
          </div>
        </div>
        <div class="space-y-2">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text text-white"
            for="message"
          >
            Message
          </label>
          <textarea
            class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
            id="message"
            placeholder="How can we help you?"
          ></textarea>
        </div>
      </div>
      <div class="items-center p-6 flex justify-end">
        <button
          class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 mt-4"
          
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Form
