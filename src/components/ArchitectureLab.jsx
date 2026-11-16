import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Server, 
  Database, 
  Radio, 
  Activity, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Sparkles,
  Terminal,
  Maximize2
} from 'lucide-react';

export default function ArchitectureLab() {
  const [activeNode, setActiveNode] = useState('springboot');

  const nodes = [
    {
      id: 'react-client',
      label: 'React 18 SPA',
      type: 'Frontend Tier',
      icon: Layers,
      color: 'from-cyan-500 to-blue-600',
      specs: {
        runtime: 'Vite 6 / React 18.3',
        state: 'Zustand + TanStack Query',
        rendering: 'Client Hydration + Optimistic UI',
        security: 'Strict CSP + HttpOnly Cookies'
      },
      fullstackDetails: 'Responsive frontend interface consuming REST/GraphQL with optimistic UI updates and real-time WebSocket state synchronization for sub-100ms user feedback.',
      enablementGoldenPath: 'Packaged as a corporate React Design System npm package with pre-built accessible components, auth wrappers, and mock server handlers for rapid prototype testing.',
      codeSample: `// Enablement Package: @enterprise/ui-client
import { useAuthSession, useEventStream } from '@enterprise/platform-sdk';

export function OrderStatusWidget({ orderId }) {
  const { status, error } = useEventStream(\`/api/v1/orders/\${orderId}/events\`);
  if (error) return <Alert variant="destructive">{error.message}</Alert>;
  return <Badge status={status}>{status.toUpperCase()}</Badge>;
}`
    },
    {
      id: 'gateway',
      label: 'API Gateway',
      type: 'Edge & Ingress',
      icon: ShieldCheck,
      color: 'from-violet-500 to-purple-600',
      specs: {
        runtime: 'Spring Cloud Gateway / Envoy',
        protocols: 'HTTP/2, WebSocket, gRPC',
        auth: 'OAuth2 / JWT Token Validation',
        rateLimit: 'Redis Token Bucket (5000 req/s)'
      },
      fullstackDetails: 'Unified ingress edge handling JWT token decoding, request throttling, path routing, and correlation ID injection across all downstream services.',
      enablementGoldenPath: 'Centralized route configuration repository with automated canary deployments and automated spectral schema validation preventing invalid payloads.',
      codeSample: `# Enablement Gateway Route Blueprint
spring:
  cloud:
    gateway:
      routes:
        - id: order-service
          uri: lb://ORDER-SERVICE
          predicates:
            - Path=/api/v1/orders/**
          filters:
            - TokenRelay=
            - AddRequestHeader=X-Correlation-ID, #{T(java.util.UUID).randomUUID()}
            - name: RequestRateLimiter
              args:
                redis-rate-limiter.replenishRate: 1000`
    },
    {
      id: 'springboot',
      label: 'Spring Boot 3',
      type: 'Core Business Service',
      icon: Server,
      color: 'from-amber-500 to-orange-600',
      specs: {
        runtime: 'Java 21 LTS + Spring Boot 3.3',
        concurrency: 'Virtual Threads (Project Loom)',
        persistence: 'Spring Data JPA + Hibernate 6',
        metrics: 'Micrometer + OpenTelemetry Tracing'
      },
      fullstackDetails: 'Mission-critical microservice utilizing Java 21 Virtual Threads to handle 15,000+ RPS without thread starvation, featuring transactional outbox pattern for guaranteed messaging.',
      enablementGoldenPath: 'The enterprise "Golden Path" Maven starter archetype: pre-integrates security filters, database healthchecks, circuit breakers (Resilience4j), and Docker scaffolding.',
      codeSample: `@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderOrchestrationService orderService;

    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public CompletableFuture<OrderReceipt> createOrder(
            @Valid @RequestBody CreateOrderRequest request,
            @AuthenticationPrincipal Jwt principal) {
        // Leverages Virtual Threads for high-throughput non-blocking dispatch
        return orderService.processOrder(request, principal.getSubject());
    }
}`
    },
    {
      id: 'kafka',
      label: 'Kafka Event Bus',
      type: 'Messaging Tier',
      icon: Radio,
      color: 'from-emerald-500 to-teal-600',
      specs: {
        runtime: 'Apache Kafka 3.7',
        serialization: 'Avro / Schema Registry',
        semantics: 'At-least-once with idempotent consumers',
        retention: 'Compacted topics + 7 day log'
      },
      fullstackDetails: 'Event-driven backbone decoupling distributed workflows with saga orchestration and Dead-Letter Queue (DLQ) automated replay mechanics.',
      enablementGoldenPath: 'Created custom Kafka Spring Starter with standardized headers, correlation propagation, schema auto-registration, and error handler decorators.',
      codeSample: `@EnablementKafkaListener(
    topics = "enterprise.orders.created.v1",
    groupId = "inventory-allocation-worker",
    deadLetterTopic = "enterprise.orders.created.DLQ"
)
public void handleOrderEvent(@Payload OrderEvent event, @Header("X-Correlation-ID") String cid) {
    log.info("[Trace: {}] Allocating inventory for order: {}", cid, event.orderId());
    inventoryService.reserve(event);
}`
    },
    {
      id: 'database',
      label: 'Postgres & Redis',
      type: 'Data & Cache Tier',
      icon: Database,
      color: 'from-blue-500 to-indigo-600',
      specs: {
        storage: 'PostgreSQL 16 + Redis 7',
        pooling: 'HikariCP (Max: 50, Timeout: 250ms)',
        migration: 'Flyway schema versioning',
        caching: 'Read-through Cache-aside strategy'
      },
      fullstackDetails: 'ACID compliant transactional store with connection pool optimizations and multi-level Redis caching, achieving 99th percentile queries under 4ms.',
      enablementGoldenPath: 'Provided database migration governance templates, Flyway CI verification steps, and automated connection leak alerts via Prometheus.',
      codeSample: `-- Flyway Enablement Standard Migration
-- V1_4__create_orders_and_outbox.sql
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_id VARCHAR(64) NOT NULL,
    total_amount NUMERIC(12,2) NOT NULL,
    status VARCHAR(32) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_orders_customer ON orders(customer_id);`
    },
    {
      id: 'observability',
      label: 'Telemetry & DX',
      type: 'Observability & DevEx',
      icon: Activity,
      color: 'from-rose-500 to-pink-600',
      specs: {
        tracing: 'OpenTelemetry Java Agent',
        metrics: 'Prometheus + Grafana dashboards',
        logs: 'Structured JSON via Logstash',
        alerting: 'PagerDuty + Slack webhook hooks'
      },
      fullstackDetails: 'Distributed tracing across React SPA and all microservices via W3C TraceContext, pinpointing latency spikes to exact SQL queries or network hops.',
      enablementGoldenPath: 'Pre-provisioned Grafana golden signal dashboards (Latency, Traffic, Errors, Saturation) auto-deployed during new service creation.',
      codeSample: `# OpenTelemetry Auto-Instrumentation Config
otel:
  exporter:
    otlp:
      endpoint: http://otel-collector:4317
  resource:
    attributes:
      service.name: order-service
      service.namespace: production
      deployment.environment: production`
    }
  ];

  const current = nodes.find(n => n.id === activeNode) || nodes[2];

  return (
    <section id="architecture-lab" className="py-24 bg-slate-900/40 relative border-t border-b border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive System Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Full Stack & Enablement Topology
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Explore how modern enterprise systems are constructed from end to end—and how Technical Enablement standardizes each layer into reusable developer assets.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 mb-10 overflow-x-auto shadow-2xl">
          <div className="text-xs font-mono uppercase text-slate-400 mb-6 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Architecture Flow &bull; Click any node to inspect specs & tooling
            </span>
            <span className="text-slate-500 hidden sm:inline">End-to-End Distributed Topology</span>
          </div>

          {/* Node Flow Horizontal Pipeline */}
          <div className="flex items-center justify-between min-w-[760px] gap-2 pb-4">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              const isSelected = activeNode === node.id;
              return (
                <React.Fragment key={node.id}>
                  <button
                    onClick={() => setActiveNode(node.id)}
                    className={`flex-1 p-3.5 rounded-xl border transition-all text-left relative group ${
                      isSelected
                        ? 'bg-slate-800/90 border-indigo-500 shadow-lg shadow-indigo-600/30 scale-105'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${node.color} flex items-center justify-center text-white shadow-sm`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-400">
                        Tier 0{index + 1}
                      </span>
                    </div>

                    <p className="text-xs font-bold text-white tracking-tight truncate">
                      {node.label}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">
                      {node.type}
                    </p>

                    {isSelected && (
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-500 rotate-45 rounded-[1px]"></span>
                    )}
                  </button>

                  {index < nodes.length - 1 && (
                    <div className="text-slate-600 px-1 shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Selected Tier Deep-Dive Details */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Full Stack Specs & Enablement Assets */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${current.color} flex items-center justify-center text-white shadow-md`}>
                  {React.createElement(current.icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white">{current.label}</h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {current.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Architectural Specification & Enablement Toolkit
                  </p>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 font-mono text-xs">
                {Object.entries(current.specs).map(([k, v]) => (
                  <div key={k} className="p-2 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-500 uppercase text-[10px] block">{k}</span>
                    <span className="text-slate-200 font-semibold">{v}</span>
                  </div>
                ))}
              </div>

              {/* Full Stack perspective */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                  <Server className="w-4 h-4" /> Full Stack Implementation Blueprint
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800">
                  {current.fullstackDetails}
                </p>
              </div>

              {/* Enablement perspective */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Enablement & Golden Path Delivery
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800">
                  {current.enablementGoldenPath}
                </p>
              </div>

            </div>

            {/* Right Column: Code / Configuration Sample */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex-1 flex flex-col font-mono text-xs">
                
                <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs text-slate-300 font-medium">Implementation Excerpt</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Read-only Snippet</span>
                </div>

                <div className="p-4 text-slate-300 overflow-x-auto flex-1 leading-relaxed bg-slate-950 text-xs">
                  <pre className="text-indigo-300">
                    <code>{current.codeSample}</code>
                  </pre>
                </div>

                <div className="bg-slate-900/60 px-4 py-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Standardized in archetype catalog</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Certified
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
