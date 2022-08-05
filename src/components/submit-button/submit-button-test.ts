export default function SubmitButtonTest() {
  function submitButtonClickTest1(): Promise<void> {
    console.log('Test 1');
    return new Promise<void>(resolve => {
      setTimeout(() => resolve(), 3000)
    })
  }

  async function submitButtonClickTest2(): Promise<void> {
    console.log('Test 2');
    return new Promise<void>((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      oReq.addEventListener('load', (response) => {
        console.log(response)
        resolve();
      });
      oReq.open('GET', 'http://www.example.org/example.txt');
      oReq.send();
      oReq.addEventListener('error', () => reject('error'))
    })
  }

  function submitButtonClickTest3(): void {
    console.log('Test 3')
  }

  function submitButtonClickTest4(): Promise<void> {
    return new Promise<void>(resolve => {
      console.log('Test 4')
    })
  }

  return {
    submitButtonClickTest1,
    submitButtonClickTest2,
    submitButtonClickTest3,
    submitButtonClickTest4,
  }
}
