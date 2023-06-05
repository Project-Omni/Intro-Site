import { Footer } from './../components/Footer'
import { Container } from './../components/Container'
import { Hero } from './../components/Hero'
import { useRef } from 'react'


const sendAccessRequest = (q1: string, q2: string) => {
	const data = {q1, q2, timestamp: new Date()};
	console.log(data)
	fetch("https://cb2ado7g6qidl4dy7p5hmg5rbq0iuexo.lambda-url.us-east-1.on.aws/", {
		method: "POST",
		headers: {
    	'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	})
}

export default function AccessRequest() {
	const answer1 = useRef<HTMLTextAreaElement | null>(null);
	const answer2 = useRef<HTMLTextAreaElement | null>(null);

  return (
		<div className='min-h-screen flex flex-col content-between'>
      <head>
        <title>Project Usher - A Better Search Engine.</title>
        <meta
          name="description"
          content="Organize the worlds information while guiding user's to signal and away from noise in a very loud world."
        />
      </head>

			<Hero showBetaReq={false}/>
		
    	<Container className="py-16 text-center">
    		<div className="space-y-10 divide-y divide-gray-900/10">
    		    <div className="px-4 sm:px-0">
    		      <h2 className="text-base font-semibold leading-7 text-gray-900">Request Beta Access</h2>
    		      <p className="mt-1 text-sm leading-6 text-gray-600">
    		        This information will be used to determine if you're fit for beta access, no need to list any identifiable information.
    		      </p>
    		    </div>

    		    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
    		      <div className="px-4 py-6 sm:p-8">
    		        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    		          <div className="col-span-full">
    		            <label className="block text-sm font-medium leading-6 text-gray-900">
    		              How do you use your current search engine?
    		            </label>
    		            <div className="mt-2">
    		              <textarea
    		                id="answer-1"
    		                name="answer-1"
												ref={answer1}
    		                rows={3}
    		                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
    		                defaultValue={''}
    		              />
    		            </div>
    		          </div>

    		          <div className="col-span-full">
    		            <label className="block text-sm font-medium leading-6 text-gray-900">
    		              What do you hope to see in the future of search engines & the web in general?
    		            </label>
    		            <div className="mt-2">
    		              <textarea
    		                id="answer-2"
    		                name="answer-2"
												ref={answer2}
    		                rows={3}
    		                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
    		                defaultValue={''}
    		              />
    		            </div>
    		          </div>

    		        </div>
    		      </div>
    		      <div className="flex items-center justify-center gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
    		        <button
    		          type="submit"
    		          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								  onClick={() => {
										if (answer1.current && answer1.current.value != "" && answer2.current && answer2.current?.value != "") {
											console.log(answer2.current)
											sendAccessRequest(answer1.current?.value!, answer2.current?.value!);
										}										
								  }}
    		        >
    		          Send
    		        </button>
    		      </div>
						</div>
				</div>
			</Container>

    	<Footer/>
		</div>
  )
}

