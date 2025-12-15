import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const questions = [
    {
      id: 1,
      title: 'Как реализовать асинхронность в Python?',
      author: 'Иванов А.П.',
      avatar: '👨‍🎓',
      category: 'Программирование',
      tags: ['Python', 'Async', 'Backend'],
      views: 245,
      answers: 12,
      votes: 34,
      date: '2 дня назад',
      solved: true
    },
    {
      id: 2,
      title: 'Объясните принцип работы React Hooks',
      author: 'Петрова М.С.',
      avatar: '👩‍🎓',
      category: 'Веб-разработка',
      tags: ['React', 'JavaScript', 'Frontend'],
      views: 189,
      answers: 8,
      votes: 28,
      date: '1 день назад',
      solved: false
    },
    {
      id: 3,
      title: 'Какие алгоритмы сортировки наиболее эффективны?',
      author: 'проф. Сидоров В.И.',
      avatar: '👨‍🏫',
      category: 'Алгоритмы',
      tags: ['Алгоритмы', 'Структуры данных'],
      views: 312,
      answers: 15,
      votes: 42,
      date: '3 дня назад',
      solved: true
    },
    {
      id: 4,
      title: 'Помогите с настройкой Docker для проекта',
      author: 'Козлов Д.А.',
      avatar: '👨‍💻',
      category: 'DevOps',
      tags: ['Docker', 'Linux', 'Deploy'],
      views: 156,
      answers: 6,
      votes: 19,
      date: '5 часов назад',
      solved: false
    },
    {
      id: 5,
      title: 'Основы работы с SQL и реляционными БД',
      author: 'Смирнова Е.К.',
      avatar: '👩‍🏫',
      category: 'Базы данных',
      tags: ['SQL', 'PostgreSQL', 'Базы данных'],
      views: 278,
      answers: 11,
      votes: 37,
      date: '4 дня назад',
      solved: true
    }
  ];

  const topUsers = [
    { name: 'проф. Сидоров В.И.', points: 2847, answers: 156, avatar: '👨‍🏫' },
    { name: 'Смирнова Е.К.', points: 1923, answers: 98, avatar: '👩‍🏫' },
    { name: 'Иванов А.П.', points: 1564, answers: 87, avatar: '👨‍🎓' },
    { name: 'Петрова М.С.', points: 1342, answers: 72, avatar: '👩‍🎓' },
    { name: 'Козлов Д.А.', points: 1198, answers: 64, avatar: '👨‍💻' }
  ];

  const categories = ['Все вопросы', 'Программирование', 'Веб-разработка', 'Алгоритмы', 'DevOps', 'Базы данных'];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  ХГУ
                </div>
                <div className="text-sm font-bold text-primary mt-1 tracking-wider">ИТИ</div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">КнижкаЗнаний</h1>
                <p className="text-sm text-muted-foreground">Платформа обмена знаниями ИТИ</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#questions" className="text-foreground hover:text-primary transition-colors">Вопросы</a>
              <a href="#scheme" className="text-foreground hover:text-primary transition-colors">Схема работы</a>
              <a href="#rating" className="text-foreground hover:text-primary transition-colors">Рейтинг</a>
              <a href="#support" className="text-foreground hover:text-primary transition-colors">Поддержка</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
              <Button size="sm">
                <Icon name="Plus" size={16} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="questions" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="questions">Вопросы и ответы</TabsTrigger>
            <TabsTrigger value="scheme">Схема работы</TabsTrigger>
          </TabsList>

          <TabsContent value="questions" className="space-y-6">
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3 space-y-6">
                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Поиск вопросов..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <Button
                          key={cat}
                          variant={activeFilter === cat ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setActiveFilter(cat)}
                          className="text-xs"
                        >
                          {cat}
                        </Button>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2 border-t">
                      <Button variant="ghost" size="sm">
                        <Icon name="TrendingUp" size={16} className="mr-2" />
                        По популярности
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Icon name="Clock" size={16} className="mr-2" />
                        По дате
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Icon name="CheckCircle" size={16} className="mr-2" />
                        Решенные
                      </Button>
                    </div>
                  </div>
                </Card>

                <div className="space-y-4">
                  {questions.map((q) => (
                    <Card key={q.id} className="p-6 hover:shadow-lg transition-all hover-scale cursor-pointer">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center gap-3 min-w-[80px]">
                          <div className="flex flex-col items-center">
                            <div className="text-2xl font-bold text-primary">{q.votes}</div>
                            <div className="text-xs text-muted-foreground">голосов</div>
                          </div>
                          <div className={`flex flex-col items-center px-3 py-2 rounded-lg ${q.solved ? 'bg-green-100' : 'bg-muted'}`}>
                            <div className="text-lg font-semibold">{q.answers}</div>
                            <div className="text-xs text-muted-foreground">ответов</div>
                          </div>
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg font-semibold hover:text-primary transition-colors">
                              {q.title}
                            </h3>
                            {q.solved && (
                              <Badge className="bg-green-500 shrink-0">
                                <Icon name="CheckCircle" size={14} className="mr-1" />
                                Решено
                              </Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {q.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <span className="text-xl">{q.avatar}</span>
                                <span>{q.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="Eye" size={16} />
                                <span>{q.views}</span>
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">{q.date}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Icon name="Trophy" size={20} className="text-yellow-500" />
                    Топ участников
                  </h3>
                  <div className="space-y-4">
                    {topUsers.map((user, idx) => (
                      <div key={user.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 font-bold text-primary text-sm">
                          {idx + 1}
                        </div>
                        <div className="text-2xl">{user.avatar}</div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{user.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {user.points} баллов
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Headphones" size={20} className="text-primary" />
                    Поддержка
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Нужна помощь? Свяжитесь с нами!
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Mail" size={16} />
                      <span>support@iti.khsu.ru</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" size={16} />
                      <span>+7 (123) 456-78-90</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="scheme">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Схема обмена знаниями</h2>
              
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="flex items-center gap-6 animate-fade-in">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white font-bold text-2xl shrink-0 shadow-lg">
                    1
                  </div>
                  <div className="flex-1 p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl border-2 border-blue-200">
                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                      <Icon name="HelpCircle" size={24} className="text-blue-600" />
                      Студент задает вопрос
                    </h3>
                    <p className="text-muted-foreground">
                      Студент формулирует вопрос, добавляет теги, категорию и публикует его на платформе
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Icon name="ArrowDown" size={32} className="text-primary animate-bounce" />
                </div>

                <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white font-bold text-2xl shrink-0 shadow-lg">
                    2
                  </div>
                  <div className="flex-1 p-6 bg-gradient-to-r from-green-50 to-white rounded-xl border-2 border-green-200">
                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                      <Icon name="Users" size={24} className="text-green-600" />
                      Сообщество видит вопрос
                    </h3>
                    <p className="text-muted-foreground">
                      Вопрос отображается в общей ленте, участники могут фильтровать по категориям и тегам
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Icon name="ArrowDown" size={32} className="text-primary animate-bounce" />
                </div>

                <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 text-white font-bold text-2xl shrink-0 shadow-lg">
                    3
                  </div>
                  <div className="flex-1 p-6 bg-gradient-to-r from-purple-50 to-white rounded-xl border-2 border-purple-200">
                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                      <Icon name="MessageSquare" size={24} className="text-purple-600" />
                      Преподаватели и студенты отвечают
                    </h3>
                    <p className="text-muted-foreground">
                      Любой участник платформы может дать ответ, поделиться опытом или добавить полезную информацию
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Icon name="ArrowDown" size={32} className="text-primary animate-bounce" />
                </div>

                <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white font-bold text-2xl shrink-0 shadow-lg">
                    4
                  </div>
                  <div className="flex-1 p-6 bg-gradient-to-r from-orange-50 to-white rounded-xl border-2 border-orange-200">
                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                      <Icon name="ThumbsUp" size={24} className="text-orange-600" />
                      Голосование за лучшие ответы
                    </h3>
                    <p className="text-muted-foreground">
                      Сообщество голосует за полезные ответы, поднимая их вверх. Автор вопроса отмечает решение
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Icon name="ArrowDown" size={32} className="text-primary animate-bounce" />
                </div>

                <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 text-white font-bold text-2xl shrink-0 shadow-lg">
                    5
                  </div>
                  <div className="flex-1 p-6 bg-gradient-to-r from-yellow-50 to-white rounded-xl border-2 border-yellow-200">
                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                      <Icon name="Award" size={24} className="text-yellow-600" />
                      Рейтинг и награды
                    </h3>
                    <p className="text-muted-foreground">
                      Активные участники получают баллы, поднимаются в рейтинге и становятся экспертами
                    </p>
                  </div>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-6">
                  <Card className="p-6 text-center hover-scale">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                        <Icon name="Zap" size={32} className="text-blue-600" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">Быстрые ответы</h4>
                    <p className="text-sm text-muted-foreground">
                      Получайте помощь от сообщества в считанные минуты
                    </p>
                  </Card>
                  <Card className="p-6 text-center hover-scale">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <Icon name="BookOpen" size={32} className="text-green-600" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">База знаний</h4>
                    <p className="text-sm text-muted-foreground">
                      Формируйте коллективную базу знаний института
                    </p>
                  </Card>
                  <Card className="p-6 text-center hover-scale">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                        <Icon name="Users" size={32} className="text-purple-600" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">Сообщество</h4>
                    <p className="text-sm text-muted-foreground">
                      Общайтесь с преподавателями и однокурсниками
                    </p>
                  </Card>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
