# Child Agent Provenance

## Requirements Agent

- project_role: Requirements Agent
- template_identifier: `基础Agent需求分析师`
- template_thread: `01a17360-8858-73f0-9fa8-95995b4fc377`
- instantiation_mode: branch / same-directory fork
- child_thread: `01a1dfa0-7388-7300-a36d-cab46dc8ef9d`
- project_phase: requirements discovery
- scope: product goals, audience, scenarios, content boundaries, acceptance criteria, user decisions
- initial_input_sent: yes, to child thread only
- blackboard_handoff: `blackboard/announcements/requirements-discovery.md`

## External Research Agent

- project_role: External Research Agent
- template_identifier: `基础调研师`
- template_thread: `01a1a168-715e-7491-9218-c19b15f3ae87`
- instantiation_mode: branch / same-directory fork
- child_thread: `01a1dfa0-8063-7e42-bdae-90b029c84b31`
- project_phase: external research and landscape alignment
- scope: free-first hosting/build landscape and adjacent public showcase patterns
- initial_input_sent: yes, to child thread only
- blackboard_handoff: `blackboard/announcements/landscape-research.md`

## Review Agent mapping

- project_role: Independent Review Agent
- template_identifier: `基础AI工程师角色`
- instantiation_mode: separate branch / same-directory fork after implementation
- owner_confirmation: explicit on 2026-11-15
- scope: independent content, architecture, browser, responsive, accessibility, and release verification
- restriction: must not approve its own implementation and must remain separate from the Engineering Agent branch

## Architecture Agent

- project_role: Architecture Agent
- template_identifier: `基础AI工程师角色`
- template_thread: `01a1732a-9dd8-75b2-9984-cfa0385ef984`
- instantiation_mode: branch / same-directory fork
- child_thread: `01a1dfaa-7c42-70a2-b102-963637d5190c`
- project_phase: architecture and decomposition
- scope: content schema, page/component boundaries, static build/deployment seam, UI direction, work units, acceptance criteria
- initial_input_sent: yes, to child thread only
- blackboard_handoff: `blackboard/announcements/architecture.md`

## Engineering Agent

- project_role: Engineering Agent
- template_identifier: `基础AI工程师角色`
- template_thread: `01a1732a-9dd8-75b2-9984-cfa0385ef984`
- instantiation_mode: branch / same-directory fork
- child_thread: `01a1dfb8-fbc0-7c80-b7ea-5b4b6f5cf274`
- project_phase: engineering implementation
- scope: local MVP site, curated content, build/preview/check scripts, README and implementation readiness report
- initial_input_sent: yes, to child thread only
- external side effects authorized: no account creation, no remote push, no deployment
- blackboard_handoff: `blackboard/announcements/implementation.md`
