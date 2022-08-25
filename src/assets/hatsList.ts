interface Hat {
  id: number;
  color: string;
  name: string;
  description: string;
  quotes: string[];
};

interface SessionItem {
  id: number;
  hatId: number;
  minutes: number;
  prompt: string;
}

let hatsList: Hat[] = [
  {
    id: 0,
    color: '#fff',
    name: 'White hat',
    description: 'facts',
    quotes: [
      'What do we know about this problem?',
      'What don’t we know about this problem?',
      'What can we learn from this situation?',
      'What information do we need to solve this issue?',
      'Are there potential existing resolutions that we can use to solve this problem?'
    ]
  },
  {
    id: 1,
    color: '#ffb703',
    name: 'Yellow hat',
    description: 'positivity',
    quotes: [
      'What is the best way to approach the issue?',
      'What can be doe to make this happen?',
      'What are the long-term benefits of this solution?'
    ]
  },
  {
    id: 2,
    color: '#000',
    name: 'Black hat',
    description: 'cautious',
    quotes: [
      'How will this idea likely fail?',
      'What is this idea’s fatal flaw?',
      'What are the potential risks and consequences?',
      'Do we have the resources, skills, and ability to make this work?'
    ]
  },
  {
    id: 3,
    color: '#ef233c',
    name: 'Red hat',
    description: 'emotions',
    quotes: [
      'What is my gut feeling about this solution?',
      'Based on feelings, is there another way to fix this problem?',
      'What are our feelings about the choice we are making?',
      'Does our intuition tell us this is the right solution'
    ]
  },
  {
    id: 4,
    color: '#84a98c',
    name: 'Green hat',
    description: 'creativity',
    quotes: [
      'Do alternative possibilities exist?',
      'Can we do this another way?',
      'How can we look at this problem from other perspectives?',
      'How do we think outside the box?'
    ]
  },
  {
    id: 5,
    // color: '#4361ee',
    color: '#0096c7',
    name: 'Blue hat',
    description: 'control',
    quotes: [
      'What is the issue?',
      'How do we define the problem?',
      'What is our goal and expected outcome?',
      'What will we achieve by solving the problem?',
      'What is the best method for going forward?'
    ]
  },
];

let opts = [];
for (let i = 0; i < hatsList.length; i++) {
  opts.push({
    id: hatsList[i].id,
    name: hatsList[i].name
  });
}

export { hatsList, opts };
export type { Hat, SessionItem };
