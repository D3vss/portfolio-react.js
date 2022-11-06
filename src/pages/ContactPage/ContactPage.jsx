import React from "react";

import { Layout, Button } from "../../components";

function ContactPage(props) {
  return (
    <Layout className={"min-h-screen"} title={"Contact Me"}>
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-white">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
            I'll always be happy to hear from you. Got anything in mind? type it
            below and reach out!
          </p>
          <form
            action="mailto:mohamed_oudoun@um5.ac.ma"
            method="POST"
            className="space-y-8"
          >
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-900 border border-blue-500 text-white text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="bg-gray-900 border border-blue-500 text-white text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="bg-gray-900 border border-blue-500 text-white text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <Button type="submit" variant={"outlined"} label={"Send"} />
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
