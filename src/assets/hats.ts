interface Color {
  color: string;
  name: string;
  description: string;
  quotes: string[];
}

let hats: Color[] = [
  {
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
]

export default hats;