-- Script para criar/atualizar a tabela user_progress e desativar o RLS para evitar bloqueios.
-- Este script NÃO apaga os usuários existentes na tabela auth.users.

-- 1. Criar a tabela se ela não existir
CREATE TABLE IF NOT EXISTS user_progress (
  user_id UUID REFERENCES auth.users(id) PRIMARY KEY,
  completed_days INTEGER[] DEFAULT '{}',
  current_day INTEGER DEFAULT 1,
  streak INTEGER DEFAULT 0,
  best_streak INTEGER DEFAULT 0,
  total_minutes INTEGER DEFAULT 0,
  total_workouts INTEGER DEFAULT 0,
  last_workout_date TEXT
);

-- 2. Desativar RLS (Row Level Security) para permitir que o app leia e escreva livremente
ALTER TABLE user_progress DISABLE ROW LEVEL SECURITY;

-- (Opcional) Se você quiser manter o RLS ativado por segurança, comente a linha acima e descomente as linhas abaixo:
-- ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
-- DROP POLICY IF EXISTS "Usuários podem ver seu próprio progresso" ON user_progress;
-- DROP POLICY IF EXISTS "Usuários podem inserir seu próprio progresso" ON user_progress;
-- DROP POLICY IF EXISTS "Usuários podem atualizar seu próprio progresso" ON user_progress;
-- CREATE POLICY "Usuários podem ver seu próprio progresso" ON user_progress FOR SELECT USING (auth.uid() = user_id);
-- CREATE POLICY "Usuários podem inserir seu próprio progresso" ON user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
-- CREATE POLICY "Usuários podem atualizar seu próprio progresso" ON user_progress FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
