const htmlTemplate = `
  <div
    style="border-radius: 4px;overflow: hidden;width: 100%;box-shadow: 0 0 10px rgba(0, 0, 0, .2);max-width: 400px;"
  >
    <div
      style="width: 100%;background: #314AD7;padding: 20px;color: white;font-size: 25px"
    >
      <h2 style="color: white">Thank you for subscription</h2>
    </div>
    <div style="width: 100%; background: white; padding: 30px">
      <img
        src="https://raw.githubusercontent.com/MaryAnzh/final-task-assets/main/img/bg1.png"
        width="100%"
      />
      <p style="padding: 20px 0; font-size: 15px">
        Dear visitor, thanks for visiting our web-application. We created it
        using TypeScript, NextJs & React. Hope, you had no problems with user
        experience during surfing through our site.
      </p>

      <hr style="margin-bottom: 20px, marginTop: 20px" />
      <span style="font-size: 20px">What about some useful links ?</span>
      <a
        href="https://github.com/MaryAnzh"
        target="_blank"
        style="border-radius: 3px;background: #314AD7;display: flex;margin-top: 10px;padding: 10px;color: white;width: 100%"
      >
        Mary's GitHub repository
      </a>
      <a
        href="https://github.com/DmitryBaranovAndreevich"
        target="_blank"
        style="border-radius: 3px;background: #314AD7;display: flex;margin-top: 10px;padding: 10px;color: white;width: 100%"
      >
        Dmitry's GitHub repository
      </a>
      <a
        href="https://github.com/user-of-github"
        target="_blank"
        style="border-radius: 3px;background: #314AD7;display: flex;margin-top: 10px;padding: 10px;color: white;width: 100%"
      >
        Nikita's GitHub repository
      </a>
    </div>
  </div>`;

  export default htmlTemplate;