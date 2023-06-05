import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

import { Footer } from './../components/Footer'
import { Container } from './../components/Container'
import { Hero } from './../components/Hero'


const sendAccessRequest = async (q1: string, q2: string): Promise<boolean> => {
	const data = {q1, q2, timestamp: new Date()};
	let worked = false;

	await fetch("https://cb2ado7g6qidl4dy7p5hmg5rbq0iuexo.lambda-url.us-east-1.on.aws/", {
		method: "POST",
		headers: {
    	'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	}).then(resp => resp.json())
		.then(jsonResp => {
			if (jsonResp.wasSuccessful) {
				worked = true;
			}
		});

	return worked;
}

export default function AccessRequest() {
  const pageNav = useNavigate();
	const answer1 = useRef<HTMLTextAreaElement | null>(null);
	const answer2 = useRef<HTMLTextAreaElement | null>(null);

  return (
		<div className='min-h-screen flex flex-col content-between'>
      <main>
			  <Hero showBetaReq={false}/>

        <hr></hr>
		
        <section className="bg-slate-900">
    	    <Container className="py-16 text-center">
    	    	<div className="space-y-10 divide-y divide-gray-900/10">
    	    	    <div className="px-4 sm:px-0">
    	    	      <h2 className="text-base font-semibold leading-7 text-gray-200">Request Beta Access</h2>
    	    	      <p className="mt-1 text-sm leading-6 text-gray-400">
    	    	        This information will be used to determine if you're fit for beta access, no need to list any identifiable information.
    	    	      </p>
    	    	    </div>

    	    	    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-xl w-3/4 md:w-1/2 mx-auto">
    	    	      <div className="px-4 py-6 sm:p-8">
    	    	        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
    	    	                className="block w-full rounded-md border border-blue-500 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
    	    	                className="block w-full rounded-md border border-blue-500 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
			    					  onClick={async () => {
			    							if (answer1.current && answer1.current.value != "" && answer2.current && answer2.current?.value != "") {
			    								let sent = await sendAccessRequest(answer1.current?.value!, answer2.current?.value!);
			    								if (sent) pageNav('/') 
			    							}										
			    					  }}
    	    	        >
    	    	          Send
    	    	        </button>
    	    	      </div>
			    			</div>
			    	</div>
			    </Container>
        </section>
      </main>

    	<Footer/>
		</div>
  )
}

