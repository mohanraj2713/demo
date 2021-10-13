	<div
          className="tab-controls mr-3 ml-3 tabs-round tab-animated tabs-medium tabs-rounded clearfix shadow-xl mb-4 mt-4"
          data-tab-items="4"
          data-tab-active="bg-highlight activated color-white"
        >
          <a
            href="javascript:void(0)"
            className="font-12"
            data-tab-active
            data-tab="tab-1"
          >
            Lessons
          </a>
          <a href="javascript:void(0)" className="font-12" data-tab="tab-2">
            Details
          </a>
          <a href="javascript:void(0)" className="font-12" data-tab="tab-3">
            My Queries
          </a>
          <a href="javascript:void(0)" className="font-12" data-tab="tab-4">
            Lesson Queries
          </a>
        </div>	

        <div className="tab-content" id="tab-1">
          <div className="p-2"></div>
          {!module ? (
            ""
          ) : (
            <>
              {Object.values(module?.lessons).map((lesson, index) => (
                <div
                  onClick={() => this.goToLesson(lesson.position)}
                  key={"lesson1-" + lesson.id}
                  className={
                    lesson.position === currentLessonOrder
                      ? "lessonselected"
                      : ""
                  }
                >
                  <div className="d-flex mb-1" role="button">
                    <div className="align-self-center">
                      {lesson.position === currentLessonOrder ? (
                        <h1 className="font-40 color-white mb-n1 icon-80 ml-3">
                          {index + 1}
                        </h1>
                      ) : (
                        <h1 className="font-40 opacity-20 mb-n1 icon-80 ml-3">
                          {index + 1}
                        </h1>
                      )}
                    </div>
                    <div className="align-self-center">
                      {lesson.position === currentLessonOrder ? (
                        <h5 className="mb-0 color-white">
                          {lesson.title}{" "}
                          {lesson.completed === 1 ? (
                            <span className="badge bg-transparent border border-green-dark color-green-dark ml-2">
                              Completed
                            </span>
                          ) : lesson.viewed === 1 ? (
                            <span className="badge bg-transparent border border-orange-dark color-orange-dark ml-2">
                              InProgress
                            </span>
                          ) : (
                            <span className="badge bg-transparent border border-gray-dark color-gray-dark ml-2">
                              Yet To Start
                            </span>
                          )}
                        </h5>
                      ) : (
                        <h5 className="mb-0">
                          {lesson.title}{" "}
                          {lesson.completed === 1 ? (
                            <span className="badge bg-transparent border border-green-dark color-green-dark ml-2">
                              Completed
                            </span>
                          ) : lesson.viewed === 1 ? (
                            <span className="badge bg-transparent border border-orange-dark color-orange-dark ml-2">
                              InProgress
                            </span>
                          ) : (
                            <span className="badge bg-transparent border border-gray-dark color-gray-dark ml-2">
                              Yet To Start
                            </span>
                          )}
                        </h5>
                      )}
                    </div>
                    <div className="align-self-center ml-auto " slot="end">
                      {lesson.position === currentLessonOrder ? (
                        <h1 className="font-30 mr-3">
                          <i className="fa fa-play-circle color-white"></i>
                        </h1>
                      ) : (
                        <h1 className="font-30 mr-3">
                          <i className="fa fa-play-circle color-highlight opacity-30"></i>
                        </h1>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="tab-content" id="tab-2">
          <div>
            <div className="p-2">
              <p className="font-600 mb-n1 color-highlight">Table of</p>
              <h1 className="mb-0">Contents</h1>
              <p>
                Here is what you can expect from our course. Be sure to view all
                of them, from start to finish to get your certificate.
              </p>
            </div>
            <div className="divider mb-0"></div>
            {!module ? (
              ""
            ) : (
              <>
                {Object.values(module?.lessons).map((lesson, index) => (
                  <div key={"lesson-details-" + lesson.id}>
                    <div className="d-flex mb-2">
                      <div className="align-self-center mt-1">
                        <h1 className=" ml-3 font-50 opacity-40 color-highlight mb-0 icon-80">
                          {index + 1}
                        </h1>
                      </div>
                      <div className="align-self-center">
                        <h5 className="mb-0">{lesson.title}</h5>
                      </div>
                    </div>
                    <div className="mb-4 ml-5">
                      <p>{lesson.description}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="tab-content" id="tab-3">
          <div className="card card-style">
            <div className="m-3">
              <div>
                <IonTextarea
                  placeholder="Raise your Question...."
                  value={textValue}
                  onIonChange={(e) => this.handleChange(e.detail.value!)}
                ></IonTextarea>
              </div>
            </div>
            <div className="row text-center p-3">
              <div className="col">
                <button
                  className="btn btn-sm rounded-s font-13 font-300 gradient-highlight"
                  onClick={() => {
                    this.postCourseQuestion();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="card card-style">
            {!QAList ? (
              ""
            ) : (
              <>
                {QAList.filter((x) => x.studentId === this.state.studentId).map(
                  (qa) => (
                    <div key={"ques-1-" + qa.id}>
                      <RaiseQuestion questionanswer={qa} />
                    </div>
                  )
                )}
              </>
            )}
          </div>
        </div>
        <div className="tab-content" id="tab-4">
          <div className="card card-style">
            {!QAList ? (
              ""
            ) : (
              <>
                {QAList.filter((x) => x.studentId != this.state.studentId).map(
                  (qa) =>
                    qa.showQuestion === 1 ? (
                      <div key={"ques-2-" + qa.id}>
                        <RaiseQuestion questionanswer={qa} />
                      </div>
                    ) : (
                      ""
                    )
                )}
              </>
            )}
          </div>
        </div>