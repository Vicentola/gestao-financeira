        <TabsContent value="education" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Educação Financeira</CardTitle>
              <CardDescription>
                Aprenda conceitos essenciais para tomar decisões inteligentes com seu dinheiro.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {educationModules.map((module, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      {completedModules.includes(module.title) && (
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          Concluído com Sucesso
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-600">
                        <strong>Conteúdo:</strong> {module.content}
                      </div>
                      {module.quiz && (
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Quiz:</Label>
                          {module.quiz.questions.map((question, qIndex) => (
                            <div key={qIndex} className="space-y-2">
                              <p className="text-sm font-medium">{question.question}</p>
                              <div className="space-y-1">
                                {question.options.map((option, oIndex) => (
                                  <button
                                    key={oIndex}
                                    onClick={() => handleQuizAnswer(module.title, qIndex, oIndex)}
                                    className={`w-full text-left p-2 rounded border text-sm ${
                                      quizAnswers[module.title]?.[qIndex] === oIndex
                                        ? oIndex === question.correct
                                          ? 'bg-green-100 border-green-500 text-green-800'
                                          : 'bg-red-100 border-red-500 text-red-800'
                                        : 'bg-white border-gray-300 hover:bg-gray-50'
                                    }`}
                                    disabled={quizAnswers[module.title]?.[qIndex] !== undefined}
                                  >
                                    {option}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                          {isModuleCompleted(module.title) && (
                            <Button
                              onClick={() => markModuleCompleted(module.title)}
                              className="w-full mt-2"
                              disabled={completedModules.includes(module.title)}
                            >
                              {completedModules.includes(module.title) ? 'Concluído' : 'Marcar como Concluído'}
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
